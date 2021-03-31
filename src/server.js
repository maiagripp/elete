//importar o pacote
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express();
server
  //utilizar body do req
  .use(express.urlencoded({ extended: true }))
  //utilizando os arquivos estáticos
  .use(express.static('public'))

  //configurar template engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  //criar uma rota
  .get('/', pages.index)
  .get('/lar', pages.lar)
  .get('/lares', pages.lares)
  .get('/create-lar', pages.createLar)
  .post('/save-lar', pages.saveLar);

//ligar o servidor
server.listen(5500);
