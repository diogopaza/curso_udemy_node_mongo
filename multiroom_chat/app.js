/*importar as configurações do servidor*/
var app = require('./config/server')

/*qual porta vai responder */


var server = app.listen(80,function(){
    console.log('servidor online')
})

var io = require('socket.io').listen(server);
/*  criar a conexao por websocket*/
/* varial global*/
app.set('io',io)

io.on('connection',function(socket){
    console.log('Usuario conectou')
    socket.on('disconnect',function(){
        console.log('descoonectou')
    })

    socket.on('msgParaServidor', function(data){        

       socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.meuTexto})
    
       socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.meuTexto})
        if(parseInt( data.apelidoAtualizado ) == 0 ){

            socket.emit('participantesParaCliente', {apelido: data.apelido})
            
            socket.broadcast.emit('participantesParaCliente', {apelido: data.apelido})

        }
       
    
    })
        

        

})
