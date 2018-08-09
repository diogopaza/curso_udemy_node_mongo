/* importar as configurações do servidor */
var app = require('./config/server');
var mongo = require('./config/dbConnection');




/* parametrizar a porta de escuta */
mongo.conectar(function(err,database ){
	if (err) console.log('erro ao conectar no banco de dados')

	app.listen(80, function(){
		console.log('Servidor online');
	})

})
