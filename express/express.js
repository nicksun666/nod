// let express = require('express');
// let app = express();
// let path =require('path');
// app.use(express.static(path.join(__dirname,'static')))
// // app.get('/index.html',function(req,res){
// //     fs.readFile('./'+req.path.substr(1),function(err,data){
// //         res.writeHead(200,{'Content-Type':'text/html'});
// //         res.write(dara.toString)
// //     })
// //     res.end()
// // })
//
// let server = app.listen(1000,function(){
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log("应用实例，访问地址为http://%s:%s",host,port)
// })

// new

let express = require('express');
let app = express();
let path = require('path')

// app.use('/lottery',  require('./lottery.js'))
app.use('/lottery2',  require('./lottery2.js'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})
app.get('/login', (req,res)=>{
    res.send('login')
})

let server = app.listen(3000,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})