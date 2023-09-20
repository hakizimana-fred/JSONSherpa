import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
  readJsonFiles();
}

function readJsonFiles() {
  const jsonPath = path.join(__dirname, "tests/step1/invalid.json");
  const jsonContent = readFileSync(jsonPath).toString();
  if (!jsonContent) {
    console.log("Invalid content");
  }
}

main();
