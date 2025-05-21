const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const server = http.createServer((res,req)=>{
  console.log(res.url);
})


server.listen(PORT,(err)=>{
  if(err){
    console.log('err');
  } else {
    console.log('server open')
  }
})