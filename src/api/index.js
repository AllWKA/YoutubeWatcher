const app = require('express')();
const fs = require('fs');
const {getContent} = require('../Services/SotoreJsonService');

app.get('/', function (req, res) {
  res.send(JSON.stringify(getContent()));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/video', function (req, res) {
  const path = getContent().folders[0].children[0].children[0].children[0].path;
  console.log('content: ',path);
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize - 1;
    const chunkSize = (end - start) + 1;
    const file = fs.createReadStream(path, {start, end});
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});