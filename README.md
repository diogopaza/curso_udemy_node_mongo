curso node - - - udemy

requisi��es http::

npm install express -save(salva dentro do projeto o 
nmp j� baixa as dependencias o  module vai junto com
o projeto)

EJS ===

npm install ejs --save

app.set('view engine','ejs')
caso queira mudar caminho das app.set('views', './app/views')

permitir escrever paginas html com javascript
engine de paginas 

informa para o expresse que o engine de view � o ejs
--------------------------

commonJS
module.exports = variavel
ou fun��o anonima
module.exports = function(){}

define as constru��es de m�dulos
permite incorporar modulos as node

----------------------------------
banco de dados mysql

npm install mysql --save

acessa a pasta bin
mysql -u user -p para ele pedir senha

show databases
create database nome;
use nome_tabela;
show tables;
select * from noticias;
insert into table(campo1,campo2) values('valores','valores');

------------------------------------------------
consign
modulo que permite incluir automaticamente
diversos modulos da aplica��o
faz um scan e atribui todas as rotas automaticamente

npm install consign --save


consign().include('routes').into(app)
faz um scan e joga tudo no servidor
----------------------------------------------------

models
s�o entidades do banco de dados
cada models representa uma tabela do banco de dados

-----------------------------------------------------

classes javascript

descreve estados e comportmentos de um objeto

toda variavel que começa com _ quer dizer que é uma propriedade da classe
--------------------------------------------------

express validator
validações de dados

npm install express-validator --save
ele é um middleware precisa incluir na inicialização


---------------------------------------

alterar tabela
alter table noticias add column resumo varchar(100);

-------------------------------------
permiti acessar arquivos estaticos

app.use(express.static('./app/public'))


-----------------------------------------------------

PROJETO MULTI-ROOM CHAT

1-criar diretorio
2-iniciar npm - npm init
3-express - npm install express --save
4-ejs - npm install ejs --save
5-consign - autoloader npm install consign --save
6- bodyparser - contem elementos de formulario - npm install body-parser --save
7- express validator - npm install express-validator --save

---------------------------------------------------
socket=

websocket== comunicação bidirecional na web, conexao persistente, foje dos paradigmas req e res tradicional web
póprio servidor envia mensagens ao cliente, sem a necessidade do cliente clicar em nada

socket.io== instalar socket.io == npm install socket.io --save



----------------------------
MONGO DB

NOSQL - AUSENCIA DA LINGUAGEM NOSQL

INSTALAR MONGODB

mongod.exe sobe o servidor
ele pede pasta data/db para salvar os dados

Manipular dados no cliente do mongodb

sistemas gerenciadores de banco de dados
Dentro temos varios banco de dados

show dbs = exibe databases

use = tambem cria banco de dados, prepara

use_nome

db.dropDatabase() = elimina banco de dados

COLLECTIONS
são as tabelas do sql

db.createCollection('nome')

db.getCollectionName()
retorna as collections do meu banco

REMOVER collection
db.nomeCollection.drop()

documento em mongo sao JSON

db.nomeCollection.save( { passa o json ex: nome:'diogo',idade:'35'})

db.nomeCollection.find()   mostra o json dentro da collection

operadores de comparação de um banco de dados
= $eq
> $gt
>= $gte
< $lt
<= $lte
!= $ne 

db.nomeCollection.findOne()
//pesquisa ultimo registro inserido
db.nomeCollection.find()
//pesquisa todos os documentos
db.nomeCollection.find.pretty()
//deixa mais amigavel identando a visualização
db.nomeCollection.find({nome:{$eq:"diogo"}})
//nome seja igual a diogo

OPERADORES LÓGICOS

AND
OR chave reservada $or: [


]

db.nomeCollection.find({sexo:{$eq:'F'}, idade:{$gt:30}}).pretty()   sexo igual F e idade maior 30

db.alunos.find({$or:[ {nome:{$eq:'Maria'}}, {nome:{$eq:'Jose'}} ] })
nome = maria or nome = jose

ATUALIZANDO documentos

update({parametros para atualização}, {$set }, {multi:false //vai agir somente no primeiro documento
que ele encontrar})

db.nomeCollection.update({ nome:'Juliana2'  }, { $set: { JJJ}} )

save == tbm permite a atualização de um registro

remove documento e inlclui um novo e se nao encontrar inclui um novo documento

save(
    _id
)


REMOVER documentos

db.alunos.remove({critério exclusão},  0 ou emitido todos os documentos serão removidos)justone

db.alunos.remove( {sexo:'Feminino'},{multi:true} ) remove todos os registros do sexo feminino se 
ocultar remove apenas 1 registro

PATH DO WINDOWS

de qualquer lugar executa o mongo

INTERFACE GRÁFICA PARA VER INFORMAÇÕES DO MONGO

executar mongod --rest

localhost:28017


//atividades mongo

4.1 db.livros.find({valor:{$gt:200}})

4.2

4.3 db.livros.find( { autor:{$ne:'Fernando'}}).pretty()

5.1 db.livros.update({título:{$eq:'PHP e MySQL'},{valor:175} }) == assim ele vai atualizar todo o registro, não
é oque queremos

nosso caso:
db.livros.update( { título:'Criando apps reais'}, {$set:{ valor:999}})

5.2

db.livros.update( {autor:'Jorge'},{ $set:{ título:'Curso Completo NodeJS'}})

5.3

db.livros.update( { valor:{$lte:25}}, {$set:{ valor:27}}, {multi:true})

6.1

db.livros.remove({autor:Joao})

6.2

db.livros.remove( {valor:{ $gt:200}, multi:true)

6.3

db.livros.remove( {valor:{$lt:30}})



MMORPG


1 - Driver do MONGODB

npm i mongodb --save

2- configurar o mongodb

3-


Express-Session 

Estudo de sessões com o Express-Session
É um middleware
fornece um cookie 

npm install express-session --save


/* a função find do mongo retorna um curso ou seja uma posição
usando junto a função toArray() teremos os dados dentro deste cursor



