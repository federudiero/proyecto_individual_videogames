//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});












/*
Este archivo se encarga de sincronizar los modelos de la base de datos y poner en marcha el servidor de la aplicación. Vamos a desglosar el código:

const server = require('./src/app.js');: Importa el servidor Express configurado y definido en el archivo app.js. Esto asume que app.js contiene toda la configuración y definición de la aplicación Express, incluyendo la configuración de rutas y middleware.

const { conn } = require('./src/db.js');: Importa la conexión a la base de datos definida en el archivo db.js. Esto asume que db.js establece la conexión a la base de datos utilizando Sequelize.

Sincronización de Modelos:

conn.sync({ force: true }).then(() => { ... });: Realiza la sincronización de los modelos de la base de datos utilizando la función sync() proporcionada por Sequelize. El parámetro { force: true } indica que la sincronización debe forzar la creación de las tablas en la base de datos, eliminando cualquier tabla previa que existiera. Esta acción puede ser útil durante el desarrollo para reiniciar la estructura de la base de datos, pero en producción generalmente se utiliza sin { force: true } para evitar la eliminación de datos existentes.
Puesta en Marcha del Servidor:

server.listen(3001, () => { ... });: Inicia el servidor de la aplicación para escuchar en el puerto 3001. Cuando el servidor se inicia exitosamente, el callback proporcionado se ejecutará. En este caso, se imprime un mensaje en la consola para indicar que el servidor está escuchando en el puerto 3001.
En resumen, este archivo sincroniza los modelos de la base de datos utilizando Sequelize, lo que implica la creación de tablas si aún no existen. Luego, inicia el servidor Express para escuchar en el puerto 3001. La sincronización forzada puede ser útil en desarrollo, pero en producción generalmente se omite para no eliminar datos existentes.
*/