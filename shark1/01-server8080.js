let http = require('http');
let server =http.createServer();
server.on('request',function(req,res){
    console.log('laile');
});
server.listen(8080,function(){
    console.log('上线');
})