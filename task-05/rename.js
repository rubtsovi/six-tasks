const fs = require("fs");
const path = require("path");

if (fs.existsSync(path.resolve("example.json"))) {
  fs.rename(path.resolve("example.json"), path.resolve("sample.json"), (err) => {
    if (err) {
      throw err;
    }
    console.info(`Rename complete!`);
  });
} else {
  console.error("File example.json does not exist");
}
