

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

module.exports = function(){

    return UsuariosDAO
}