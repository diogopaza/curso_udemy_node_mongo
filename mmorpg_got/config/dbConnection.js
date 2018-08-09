const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'got';
var _db

exports.conectar = async function(callback){

    await MongoClient.connect(url, { useNewUrlParser: true }, function(err, connection) {
       if (err) console.log('erro')
        console.log("Connected successfully to server");
      
        _db = connection
      
        return callback(err)
       
      });
      



}     

exports.myDB = function(){
    return _db 
} 



