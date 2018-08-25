module.exports.jogo = function(application, req, res){
        if(req.session.autorizado){

            console.log( 'hjkhjkhjkhjk')
            res.render('jogo', { img_casa: req.session.casa});
        }
        res.send('Usuário precisa fazer login')
    
    }

    module.exports.sair = function(application, req, res){
        req.session.destroy(function(err){
            res.render('index',{ validacao:{}} )
        })
    }