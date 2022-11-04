var http = require('http');
var server = http.createserver('handleRequest');
function handleRequest(req,res){
    console.log(req.method,res.method);
    res.end('welocome');
}
server.listen(3000,()=>{
    console.log('server is listening on port 3000');
})