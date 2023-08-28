const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    
    background_image: {
      type: DataTypes.TEXT,
    },released: {
      type:DataTypes.DATEONLY,
    },
    rating: {
      type:DataTypes.DECIMAL,
    }
  });
};














/*

Este archivo define el modelo de datos para la tabla "videogame" en la base de datos utilizando Sequelize, un ORM (Object-Relational Mapping) para Node.js. Vamos a analizar cada parte del código:

const { DataTypes, UUIDV4 } = require("sequelize");: Importa las clases DataTypes y UUIDV4 desde Sequelize. DataTypes proporciona tipos de datos para definir las columnas de la tabla, y UUIDV4 es una función para generar identificadores únicos.

module.exports = (sequelize) => { ... }: Exporta una función que define el modelo de datos y recibe la instancia de conexión sequelize como parámetro.

Definición del modelo "videogame":

sequelize.define("videogame", { ... }): Utilizando el método define de la instancia de sequelize, se define el modelo de datos "videogame".
Dentro del objeto de configuración, se definen las columnas de la tabla y sus respectivos tipos de datos:
id: Una columna de tipo UUID (identificador único universal) que actúa como clave primaria. Se genera automáticamente utilizando UUIDV4.
name: Una columna de tipo STRING (cadena de caracteres) que no permite valores nulos (allowNull: false).
description: Una columna de tipo TEXT (texto largo) que almacena la descripción del videojuego.
platforms: Una columna de tipo ARRAY que almacena una lista de plataformas como cadenas de caracteres.
background_image: Una columna de tipo TEXT que almacena una URL de imagen para el fondo.
released: Una columna de tipo DATEONLY que almacena la fecha de lanzamiento del videojuego.
rating: Una columna de tipo DECIMAL que almacena la calificación del videojuego.
En resumen, este archivo define el modelo de datos para la tabla "videogame" en la base de datos utilizando Sequelize. Cada propiedad dentro del objeto de configuración representa una columna en la tabla, y se especifica el tipo de datos y las restricciones correspondientes. Este modelo se utilizará para crear, actualizar y consultar registros en la base de datos.

*/