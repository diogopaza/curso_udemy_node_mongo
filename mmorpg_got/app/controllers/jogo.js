module.exports.jogo = function(application, req, res){
        if(req.session.autorizado){
            res.render('jogo');
        }
        res.send('Usuário precisa fazer login')
    
    }