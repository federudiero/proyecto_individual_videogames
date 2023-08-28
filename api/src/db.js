require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,DDB,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DDB}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Videogame, Genre } = sequelize.models;

// Aca vendrian las relaciones
Videogame.belongsToMany(Genre, {through: 'videogame_genre'});
Genre.belongsToMany(Videogame, {through: 'videogame_genre'});
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};













/*

Este archivo configura y exporta la conexión a la base de datos utilizando Sequelize, un ORM (Object-Relational Mapping) para Node.js que facilita la interacción con bases de datos relacionales. 

require('dotenv').config();: Carga las variables de entorno desde el archivo .env. Esto es útil para ocultar información sensible como credenciales de la base de datos.

Importaciones de módulos y variables de entorno:

const { Sequelize } = require('sequelize');: Importa la clase Sequelize de la librería Sequelize.
const fs = require('fs'); y const path = require('path');: Importa los módulos fs y path de Node.js para trabajar con archivos y rutas.
Luego, se desestructuran las variables de entorno relacionadas con la base de datos: DB_USER, DB_PASSWORD, DB_HOST y DDB (nombre de la base de datos).
Configuración de la conexión a la base de datos:

const sequelize = new Sequelize(...);: Crea una instancia de Sequelize y establece la conexión a la base de datos PostgreSQL utilizando las variables de entorno. También se configura la opción logging para deshabilitar el registro de consultas SQL y native para mejorar la velocidad de la conexión.
Lectura de modelos y definición de relaciones:

const modelDefiners = [];: Crea un arreglo para almacenar los modelos definidos.
Mediante fs.readdirSync, se leen los archivos en la carpeta /models, se filtran los archivos JavaScript (.js) y se agregan al arreglo modelDefiners después de requerirlos.
Luego, se ejecuta el método forEach en modelDefiners para pasarles la instancia de sequelize, lo que asocia la conexión a cada modelo.
Se capitalizan los nombres de los modelos en sequelize.models.
Asociación de relaciones:

Se establece una relación de muchos a muchos entre los modelos Videogame y Genre mediante belongsToMany. Esto se realiza a través de una tabla intermedia denominada 'videogame_genre'.
Exportación:

Se exportan los modelos capitalizados y la instancia de conexión sequelize bajo el nombre conn. Esto permite importar los modelos y la conexión en otros archivos.



*/