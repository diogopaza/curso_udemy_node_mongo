var http = require('http');

server = http.createServer(function(req, res){

	var categoria = req.url;
	
	if(categoria == '/tecnologia'){
		res.end('<html><body>Portal de Tecnologia</html></body>');
	}else if(categoria == '/moda'){
		res.end('<html><body>Portal de Moda</html></body>');
	}else if(categoria == '/beleza'){
		res.end('<html><body>Portal de beleza</html></body>');
	}else{
		res.end('<html><body>Portal de Notícias</html></body>');
	}
	 



	

});

server.listen(3000,() => {

	console.log('escutando na 3000');
})


