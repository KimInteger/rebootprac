const http = require('http');
const fs = require('fs');
const path = require('path');
const {serveStaticFile} = require('./module')
const PORT = 3000;

const server = http.createServer((req,res)=>{
  console.log(` 요청 확인 : ${req.url}`);

  let filePath = req.url === '/' ? './index.html' : `.${req.url}`;
  filePath = path.join(__dirname, filePath);
  console.log(filePath)

  serveStaticFile(res, filePath);
})


server.listen(PORT,(err)=>{
  if(err){
    console.log('err');
  } else {
    console.log(`server open : http://localhost:${PORT}`)
  }
})