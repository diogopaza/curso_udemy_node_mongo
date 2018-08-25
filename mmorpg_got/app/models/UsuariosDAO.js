

function UsuariosDAO(connection){
    
    
    this._db = connection.db('got')
    
   
    //tt = mongo.db('hjkjhkjhkj')
  
   // db = mongo.db('teste')

        //this._connection =  connection()
       // console.log(connection)
        
       //connection.db('teste')
    //db.collection('teste').find()

}

UsuariosDAO.prototype.inserirUsuario = async function(usuario){
    
   this._db.collection('user', function(err, collection){

        collection.insert(usuario)

   })
    

    //const collection = this._connection.collection('teste')
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
    this._db.collection('user', function(err, collection){
        
                collection.find( usuario ).toArray(function(err, result){
                   
                    if(result[0] != undefined){
                        req.session.autorizado = true;
                        req.session.usuario = result[0].usuario;
                        req.session.casa = result[0].casa;


                    }
                    if(req.session.autorizado){
                        res.render('jogo', { img_casa: req.session.casa})
                    }else{
                        res.render('index', {validacao:{} })
                       
                    }
                })

        
           })

}

module.exports = function(){

    return UsuariosDAO
}