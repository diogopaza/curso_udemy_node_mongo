var express = require('express')
var app = express();

app.set('view engine','ejs')

app.get('/formulario_inclusao_noticia',function(req, res){
    
            res.render('admin/form_add_noticia')
    })

    app.get('/',function(req, res){
        
                res.render('home/index')
        })

app.get('/noticias',function(req, res){

        res.render('noticias/noticias')
})

   

app.listen(3000, function(){
    console.log('escutando na 3000 com express')
})




