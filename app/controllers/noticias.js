module.exports.noticias = function(application, req, res){
    connection = application.config.dbConnection();
    noticiasModel = new application.app.models.NoticiasDAO(connection)
    noticiasModel.getNoticias(function(error, result){
        res.render("noticias/noticias", { noticias : result } )
            
        })

}

module.exports.noticia = function(application, req, res){

    connection = app.config.dbConnection();
    noticiaModel = new app.app.models.NoticiasDAO(connection);
   
    var id_noticia = req.query
   
    noticiaModel.getNoticia(id_noticia, function(error, result){
        
        res.render('noticias/noticia', { noticia : result })
    })

}