const app = require("express")();
const {Folder} = require("../classes/Folder");
const fs = require('fs');

const path = "/Users/bryanjaramillobaldeon/Documents/my_projects/YoutubeWatcher/src/folderExample/series/serie1/temp1/cap1-t1.mp4";
const folder = new Folder(path);

app.get("/video", function(req, res) {
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1]
        ? parseInt(parts[1], 10)
        : fileSize - 1;
    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(path, {start, end});
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4"
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4"
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});

let server = app.listen(3000, function() {
  console.log("Express server listening on port " + server.address().port);
});