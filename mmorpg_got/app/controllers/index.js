module.exports.index = function(application, req, res){
    
        res.render('index', { validacao:{} });
    
    }

    module.exports.autenticar = function(application, req, res){
        
           var dados = req.body
           req.assert('usuario', 'usuario não pode estar vazio').notEmpty()
           req.assert('senha', 'Senha não pode estar vazio').notEmpty()

           var erros = req.validationErrors()
           if(erros){
              
               res.render('index', {validacao:erros})
               return
           }

           res.send('tudo ok para criar a sessao')
        
        }