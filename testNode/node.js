// 创建http
// let http = require('http');
// let server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html');
//     res.write('<div style="color:lightblue">Hello World!</div>')
//     res.end('<div style="color:rebeccapurple">Hello World!</div>')
// })
// server.listen(2121,'127.0.0.1',()=>{
//     console.log('success')
// })

//回调函数
let fs = require('fs');
// let path = require('path')

// let data = fs.readFileSync(path.join(__dirname,'input.txt'));
 let data = fs.readFileSync('./testNode/input.txt');
 console.log(data.toString());