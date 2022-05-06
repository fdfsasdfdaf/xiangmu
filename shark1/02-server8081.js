let{ createServer } = require('http')
// console.log(createServer);
createServer().on('request',function(request,response){

console.log(request.url);
response.write('wosldsak')
response.end()
}).listen(8081,function(){
    console.log(8081);
})