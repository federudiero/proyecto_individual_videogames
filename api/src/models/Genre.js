const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("genre", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};














/*
Este archivo define el modelo de datos para la tabla "genre" en la base de datos utilizando Sequelize, similar al ejemplo anterior. Vamos a analizar cada parte del código:

const { DataTypes } = require("sequelize");: Importa la clase DataTypes desde Sequelize, que proporciona tipos de datos para definir las columnas de la tabla.

module.exports = (sequelize) => { ... }: Exporta una función que define el modelo de datos y recibe la instancia de conexión sequelize como parámetro.

Definición del modelo "genre":

sequelize.define("genre", { ... }): Utilizando el método define de la instancia de sequelize, se define el modelo de datos "genre".
Dentro del objeto de configuración, se definen las columnas de la tabla y sus respectivos tipos de datos:
id: Una columna de tipo INTEGER (entero) que actúa como clave primaria.
name: Una columna de tipo STRING (cadena de caracteres) que no permite valores nulos (allowNull: false).
En resumen, este archivo define el modelo de datos para la tabla "genre" en la base de datos utilizando Sequelize. Cada propiedad dentro del objeto de configuración representa una columna en la tabla, y se especifica el tipo de datos y las restricciones correspondientes. Este modelo se utilizará para crear, actualizar y consultar registros en la base de datos relacionados con géneros de videojuegos.

*/