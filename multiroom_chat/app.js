/*importar as configurações do servidor*/
var app = require('./config/server')

/*qual porta vai responder */


var server = app.listen(80,function(){
    console.log('servidor online')
})

io = require('socket.io').listen(server);
/*  criar a conexao por websocket*/

io.on('connection',function(socket){
    console.log('Usuario conectou')
    socket.on('disconnect',function(){
        console.log('descoonectou')
    })
    
})
