const fs = require("fs");

console.log("Reading file...");

fs.readFile("callbacks/read.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("File content:", data);
  }
});

console.log("Done!");
