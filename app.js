const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url === '/'){
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath,(err,data)=>{
      if(err){
        res.writeHead(500, {"Content-Type":"text/plain"});
        res.end("잘못된 접근")
      } else {
        res.writeHead(200,{"Content-Type" : "text/html"})
        res.end(data)
      }
    })
  } else if (req.url==='/index.js'){
    const filePath = path.join(__dirname,'index.js');
    fs.readFile(filePath,(err,data)=>{
      if(err){
        res.writeHead(500, {"Content-Type":"text/plain"});
        res.end("잘못된 접근")
      } else {
        res.writeHead(200,{"Content-Type" : "application/javascript"})
        res.end(data)
      }
    })
  }
})


server.listen(PORT,(err)=>{
  if(err){
    console.log('err');
  } else {
    console.log('server open')
  }
})