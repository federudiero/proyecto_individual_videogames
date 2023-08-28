const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Genre } = require("../db");

const getGenres = async () => {
  
  const { data } = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
 
  const genres = data.results.map((result) => {
    const { id, name } = result;
    return { id, name };
  });
  

  for (let i = 0; i < genres.length; i++) {
    await Genre.findOrCreate({
      where: { id: genres[i].id },
      defaults: { name: genres[i].name },
    });
  }
 
  return genres;
};

module.exports = { getGenres };

/*
genreController.js
GET /genres
Esta ruta obtiene un arreglo con todos los géneros existentes. La función asociada maneja lo siguiente:

Utiliza el modelo Genre para consultar la base de datos y obtener todos los géneros.
El método findAll se utiliza para buscar todos los registros en la tabla Genre.
Responde con un arreglo de objetos de géneros.
Estos controladores trabajan en conjunto para manejar las operaciones de lectura y creación de videojuegos y géneros, siguiendo las especificaciones que proporcionaste.
*/