import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 5199;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve files from the dist folder
app.use(express.static(path.join(__dirname, "dist")));

// Handle all routes by returning index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
