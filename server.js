import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const distPath = path.join(__dirname, "dist");

// Serve the Vite production files
app.use(express.static(distPath));

// Handle React/Vite routes
app.use((req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`FurSweep running on port ${PORT}`);
});
