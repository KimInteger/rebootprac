const mime = require('mime-types')
const fs = require('fs')
const path = require('path')

function serveStaticFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("파일을 찾을 수 없습니다.");
    } else {
      console.log(filePath)
      const contentType = mime.lookup(filePath) || 'application/octet-stream';
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

module.exports = {
  serveStaticFile,
};