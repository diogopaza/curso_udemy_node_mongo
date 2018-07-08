module.exports.iniciaChat = function(application, req, res){

   dadosForm = req.body;
   
   req.assert('apelido','Apelido é obrigatorio').notEmpty();
   req.assert('apelido','Nome ou apelido deve conter no entre 3 e 15 caracteres').len(3,15);

   var erros = req.validationErrors();
 
   if(erros){
       res.render("index", {validacao: erros})
   }

    res.render("chat")
}