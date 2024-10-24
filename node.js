const http1=require('http');

const webserver=http1.createServer((red,res)=>{
    res.end("Hello saran");
});

webserver.listen(3500,()=>{
    console.log("the current server running is http://localhost:3500");
});