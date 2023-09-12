const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);


server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;

  res.status(status).send(message);
});

module.exports = server;



























/*
Este código se refiere a la configuración básica de un servidor web utilizando el framework Express.js en Node.js. 

const express = require('express');: Esto importa el módulo express, que es un framework web de Node.js que simplifica la creación de servidores y la gestión de rutas.

const cookieParser = require('cookie-parser');: Este módulo se utiliza para analizar las cookies que se envían en las solicitudes HTTP.

const bodyParser = require('body-parser');: El módulo body-parser se utiliza para analizar el cuerpo de las solicitudes HTTP, especialmente en formato JSON y urlencoded.

const morgan = require('morgan');: El módulo morgan es un middleware de registro de solicitudes HTTP que ayuda a mostrar información sobre las solicitudes entrantes en la consola.

const routes = require('./routes/index.js');: Aquí se importan las rutas del servidor desde el archivo index.js en la carpeta routes.

require('./db.js');: Esto importa el archivo db.js, que probablemente contiene la configuración y la conexión a una base de datos.

const server = express();: Crea una instancia del servidor Express y la almacena en la variable server.

server.name = 'API';: Asigna el nombre "API" a la instancia del servidor.

Middleware para el análisis del cuerpo y las cookies:

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));: Configura el middleware body-parser para analizar datos urlencoded y establece un límite de tamaño para las solicitudes.
server.use(bodyParser.json({ limit: '50mb' }));: Configura el middleware body-parser para analizar datos JSON y establece un límite de tamaño para las solicitudes.
server.use(cookieParser());: Configura el middleware cookie-parser para analizar las cookies en las solicitudes.

Middleware de registro y control de CORS:

server.use(morgan('dev'));: Configura el middleware morgan en modo "dev" para registrar detalles de las solicitudes en la consola.
Configura las cabeceras de respuesta para permitir peticiones desde un dominio específico mediante CORS (Cross-Origin Resource Sharing). Las cabeceras Access-Control-Allow-* permiten controlar las restricciones de seguridad cuando se realizan solicitudes desde un dominio diferente.
server.use('/', routes);: Configura las rutas de las API importadas desde el archivo index.js.

Manejo de errores:

server.use((err, req, res, next) => { ... });: Define un middleware para manejar errores. Si se produce un error en alguna parte del servidor, este middleware captura el error, registra los detalles en la consola y devuelve una respuesta de error al cliente.
module.exports = server;: Exporta la instancia del servidor para que pueda ser importada y utilizada en otros archivos de Node.js.
En resumen, este código configura un servidor web utilizando Express.js, maneja el análisis de cuerpos de solicitudes, cookies, registros de solicitudes y control de CORS. También establece las rutas para las APIs y proporciona un manejo básico de errores.


*/