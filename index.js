import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
  readJsonFiles();
}

function readJsonFiles() {
  // read step1 folder content
  const invalidJsonOne = path.join(__dirname, "tests/step1/invalid.json");
  const invalidJsonOneContent = readFileSync(invalidJsonOne).toString();

  const invalidJsonTwo = path.join(__dirname, "tests/step2/invalid.json");
  const invalidJsonTwoContent = readFileSync(invalidJsonTwo).toString();

  if (!invalidJsonOneContent) {
    console.log("Invalid content", invalidJsonOneContent);
  }

  try {
    const output = readValidJson("tests/step2/valid.json");
    console.log(output);
  } catch (e) {
    console.log(e.message);
  }

  try {
    JSON.parse(invalidJsonTwoContent);
    console.log("valid JSON");
  } catch (e) {
    console.log("Invalid JSON", invalidJsonTwo, e.message);
  }
}

function readJsonContent(filePath) {
  const jsonFile = readFileSync(path.join(__dirname, filePath)).toString();
  return jsonFile;
}

function readValidJson(path) {
  const jsonFile = readJsonContent(path);
  if (JSON.parse(jsonFile)) {
    return "Valid JSON " + jsonFile;
  } else {
    throw new Error("Invalid JSON", jsonFile);
  }
}

main();
