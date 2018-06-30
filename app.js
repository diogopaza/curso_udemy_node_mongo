app = require('./config/server')

/*
var home = require('./app/routes/home')
home(app);

var formulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')
formulario_inclusao_noticia(app)

var noticias = require('./app/routes/noticias')
noticias(app) 
*/



app.listen(3000, function(){
    console.log('escutando na 3000 com express')
})




