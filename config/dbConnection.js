var mysql = require('mysql');

var connMysql = function(){
    console.log('Conexão com foi estabelecida')
    return connection = mysql.createConnection({
         host:'localhost',
         user:'root',
         password:'090799',
         database:'novo_portal_noticias'
    });

}

module.exports = function(){
   
    console.log('o autoload carregou o modulo de conexao com o BD')
    return connMysql
};


