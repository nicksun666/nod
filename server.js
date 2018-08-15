let http = require('http');
let fs = require('fs')


let server = http.createServer(function(req,res){
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write('<meta charset="utf-8">')
    res.write('<div>12312</div>')
    res.write('<div></div>')
    fs.readFile('./index.html','utf-8',function(err,data){
        if(err){
            throw err ;
        }
    });
    res.end();
});
    server.listen(8080,'127.0.0.1',function(){
    console.log('success')
});