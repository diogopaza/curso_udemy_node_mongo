mongo = require('./dbConnection')

mongo.conectar(function(err){
    if(err) console.log('deu erro')
    myMongo = mongo.myDB()
    db = myMongo.db('got')
    db.createCollection('user', function(err, collection){
        if(err) console.log('deu erro')
            console.log('collection criada com sucesso')
    })
})






