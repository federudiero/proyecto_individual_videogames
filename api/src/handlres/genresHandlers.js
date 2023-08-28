const { getGenres } = require("../controllers/genresController");

const getGenresHandler = async (req, res) => {
  try {
    //Getting genres from API and saving (if don't exists) in database
    const genres = await getGenres();
    //Response
    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getGenresHandler };









/*

Este archivo exporta una función controladora (getGenresHandler) que se utiliza para manejar una solicitud HTTP para obtener los géneros de videojuegos. La función intenta obtener los géneros de la API y, en caso de que no existan en la base de datos, los guarda en la base de datos. Finalmente, responde a la solicitud HTTP con una respuesta JSON que contiene los géneros obtenidos. Si ocurre algún error durante este proceso, responde con un mensaje de error y un código de estado HTTP 400. Aquí está una explicación más detallada:

const { getGenres } = require("../controllers/genresController");: Importa la función getGenres del módulo genresController ubicado en la carpeta controllers.

const getGenresHandler = async (req, res) => { ... }: Define la función controladora getGenresHandler. Esta función toma dos parámetros: req (solicitud HTTP) y res (respuesta HTTP).

En el bloque try:

const genres = await getGenres();: Llama a la función getGenres() para obtener los géneros. El await indica que la función es asíncrona y espera a que se complete la operación.
res.status(200).json(genres);: Responde a la solicitud con un código de estado HTTP 200 (éxito) y envía una respuesta JSON que contiene los géneros obtenidos.
En el bloque catch:

res.status(400).json({ error: error.message });: En caso de que ocurra un error en el bloque try, responde a la solicitud con un código de estado HTTP 400 (error de solicitud) y envía un objeto JSON que contiene un mensaje de error basado en el mensaje del error capturado.
module.exports = { getGenresHandler };: Exporta la función getGenresHandler para que pueda ser utilizada en otros archivos, como en las rutas de la aplicación.

En resumen, este archivo define y exporta una función controladora que maneja una solicitud para obtener géneros de videojuegos. La función intenta obtener los géneros de la API y, si es necesario, los guarda en la base de datos. Luego, responde con los géneros obtenidos o un mensaje de error en caso de un problema.

*/