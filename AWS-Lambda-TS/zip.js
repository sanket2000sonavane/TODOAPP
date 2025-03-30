const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("dist/index.zip");
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", () => {
    console.log(`Archive created: ${archive.pointer()} total bytes`);
});

archive.on("error", (err) => {
    throw err;
});

archive.pipe(output);
archive.file("dist/index.js", { name: "index.js" });
archive.finalize();