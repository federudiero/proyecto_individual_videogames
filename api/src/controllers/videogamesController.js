const { Videogame, Genre } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Op } = require("sequelize");
const {
  arrangeDb,
  arrangeApi,
  arrangeApiId,
  arrangeDbId,
} = require("../utils/arrangeApiDb");

const getDbVideogames = async () => {
 
  let dbVideogames = await Videogame.findAll({
    include: {
      model: Genre,
      atributes: ["name"],
      through: { atributes: [] },
    },
  });
 
  return dbVideogames.map((dbVg) => arrangeDb(dbVg));
};

const getApiVideogames = async () => {
 
  let contain = [];
  for (let i = 1; i <= 4; i++){
  contain = [...contain,...(await axios.get(`https://api.rawg.io/api/games?page=${i}&page_size=30&key=${API_KEY}`)).data.results]}
  
  return contain.map((apiVg) => arrangeApi(apiVg));
};

const getDbVideogameByName = async (search) => {
 
  let dbVideogames = await Videogame.findAll(
    {
      where: { name: { [Op.iLike]: `%${search}%` } },
      include: {
        model: Genre,
        atributes: ["name"],
        through: {
          atributes: [],
        },
      },
    },
    { limit: 15 }
  );
  
  return dbVideogames.map((dbVg) => arrangeDb(dbVg));
};

const getApiVideogamesByName = async (search) => {
 
  const { data } = await axios.get(
    `https://api.rawg.io/api/games?search=${search}&key=${API_KEY}`
  );
  
  return data.results.map((apiVideogame) => arrangeApi(apiVideogame));
};

const getVideogameById = async (idVideogame) => {
  if (isNaN(idVideogame)) {
    const data = await Videogame.findByPk(idVideogame, {
      include: {
        model: Genre,
        atributes: ["name"],
        through: {
          atributes: [],
        },
      },
    });
    return arrangeDbId(data);
  } else {
    const { data } = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}` );
    return arrangeApiId(data);
  }
};

const postVideogame = async (id,name,description,platforms,background_image,released,rating,genres) => {
  
  const newGame = await Videogame.create({
    id,
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
  });
  
  newGame.addGenres(genres);
  
  return newGame;
};

module.exports = {
  getDbVideogames,
  getApiVideogames,
  getDbVideogameByName,
  getApiVideogamesByName,
  getVideogameById,
  postVideogame,
};















/*

Este archivo contiene un conjunto de funciones que interactúan con la base de datos y con la API para realizar diversas operaciones relacionadas con los videojuegos. Cada función realiza una tarea específica, como obtener videojuegos de la base de datos, obtener videojuegos de la API, buscar videojuegos por nombre, obtener detalles de un videojuego por su ID y crear un nuevo videojuego. Vamos a revisar cada función en detalle:

getDbVideogames: Obtiene videojuegos de la base de datos junto con sus géneros relacionados. Utiliza el modelo Videogame definido en ../db.js y la función arrangeDbData para dar formato a los datos.

getApiVideogames: Obtiene videojuegos de la API mediante solicitudes consecutivas a la API Rawg. Realiza tres solicitudes para obtener los primeros 120 resultados (3 páginas de 40 resultados cada una). Utiliza la función arrangeApiData para dar formato a los datos.

getDbVideogameByName: Busca videojuegos en la base de datos por nombre, de manera insensible a mayúsculas y minúsculas. También incluye los géneros relacionados. Limita el resultado a 15 elementos y utiliza la función arrangeDbData para dar formato a los datos.

getApiVideogamesByName: Busca videojuegos en la API por nombre. Utiliza la función arrangeApiData para dar formato a los datos.

getVideogameById: Obtiene detalles de un videojuego por su ID. Si el ID no es numérico, busca el videojuego en la base de datos utilizando el modelo Videogame y la función arrangeDbDataId para dar formato a los datos. Si el ID es numérico, obtiene los detalles de la API y utiliza la función arrangeApiDataId para dar formato a los datos.

postVideogame: Crea un nuevo videojuego en la base de datos a partir de los datos recibidos. Utiliza el modelo Videogame definido en ../db.js y la función addGenres para establecer las relaciones con los géneros. Retorna el videojuego recién creado.

Cada función está diseñada para manejar una operación específica en relación con los videojuegos, ya sea obtener datos, buscarlos, crear nuevos registros o dar formato a la información. Estas funciones se exportan para ser utilizadas en otros archivos, como en las funciones controladoras que manejan las solicitudes HTTP.

*/