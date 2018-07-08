/* importar o express */
var express = require('express')

/* importar consign*/
var consign = require('consign')

var bodyParser = require('body-parser')

var expressValidator = require('express-validator')

/* iniciar objeto express*/

app = express();

/* configurar ejs como engine de views*/
app.set('view engine','ejs')
/* seta onde nossas views esta*/
app.set('views','./app/views')
/* middleware*/
app.use(express.static('./app/public'))
/* configurar o midleware body-parser*/
app.use(bodyParser.urlencoded({extended:true}))
/* configurar o midleware express validator */
app.use(expressValidator())
/*  efetua o autoload das rotas dos models e dos controllers para o objeto app*/
consign()
    .include('app/routes')
    .include('app/models')
    .include('app/controllers')
    .into(app)





/* exportar objeto app */
module.exports = app;

