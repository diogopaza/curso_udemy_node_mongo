mongo = require('../../config/dbConnection')

function UsuariosDAO(application, req, res){
    
    var connection = application.config.dbConnection.myDB()
    db = connection.db('got')
    console.log('ok')
   
    //tt = mongo.db('hjkjhkjhkj')
  
   // db = mongo.db('teste')

        //this._connection =  connection()
       // console.log(connection)
        
       //connection.db('teste')
    //db.collection('teste').find()

}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
   console.log('to no usuarioDAO')
   

    //const collection = this._connection.collection('teste')
   
   
    

}

module.exports = function(){

    return UsuariosDAO
}