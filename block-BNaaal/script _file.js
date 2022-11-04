var http = require('http');
var server = http.createserver(handleRequest);
function handleRequest(req,res){
    res.end('welcome');
}
server.listen(4000,()=>{
    console.log('server listening on port 4000');
})