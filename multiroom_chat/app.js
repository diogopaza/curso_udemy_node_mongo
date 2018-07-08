/*importar as configurações do servidor*/
var app = require('./config/server')

/*qual porta vai responder */


app.listen(80,function(){
    console.log('servidor online')
})