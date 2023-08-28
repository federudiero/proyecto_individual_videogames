const {getDbVideogames,getApiVideogames,getDbVideogameByName,getApiVideogamesByName,getVideogameById,postVideogame}=require("../controllers/videogamesController");





const getVideogamesHandler = async (req, res) => {
  try {
    
    
    const apiVideogames = await getApiVideogames();
    const dbVideogames = await getDbVideogames();
    const arrayVideogames = [...dbVideogames, ...apiVideogames];
  
    res.status(200).json(arrayVideogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};






const getVideogameByNameHandler = async (req, res) => {
  
  const { search } = req.query;
  try {
    
    const dbVideogames = await getDbVideogameByName(search);
   
    if (dbVideogames.length < 15) {
      const apiVideogames = await getApiVideogamesByName(search);
     
      const arrayVideogames = [...dbVideogames, ...apiVideogames].slice(0, 15);
     
      return res.status(200).json(arrayVideogames);
    }
   
    res.status(200).json(dbVideogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};





const getVideogameByIdHandler = async (req, res) => {
  //Getting idVideogame from params
  const { idVideogame } = req.params;

  try {
    //Requering data from DB/API
    const videogame = await getVideogameById(idVideogame);
    res.status(200).json(videogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};







const postVideogameHandler = async (req, res) => {
 
  const {id,name,description,platforms,background_image,released,rating,genres} = req.body;

  try {
    
    const newGame = await postVideogame(
      id,
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      genres
    );
   
    res.status(200).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getVideogamesHandler,
  getVideogameByNameHandler,
  getVideogameByIdHandler,
  postVideogameHandler,
};















/*
const { ... } = require("../controllers/videogamesController");: Importa las funciones controladoras relacionadas con los videojuegos del módulo videogamesController ubicado en la carpeta controllers.
Función getVideogamesHandler:

Esta función maneja la solicitud HTTP para obtener todos los videojuegos.
Obtiene videojuegos de la base de datos y de la API.
Combina la información de la base de datos y la API.
Responde con un arreglo que contiene todos los videojuegos obtenidos.
Función getVideogameByNameHandler:

Maneja la solicitud HTTP para buscar videojuegos por nombre.
Obtiene información de la base de datos para los videojuegos que coinciden con el nombre de búsqueda.
Si la cantidad de videojuegos encontrados en la base de datos es menor a 15, busca el resto en la API.
Limita el número total de elementos a 15.
Responde con un arreglo que contiene los videojuegos encontrados.
Función getVideogameByIdHandler:

Maneja la solicitud HTTP para obtener detalles de un videojuego por su ID.
Obtiene la información del videojuego utilizando la función getVideogameById.
Responde con un objeto JSON que contiene los detalles del videojuego.
Función postVideogameHandler:

Maneja la solicitud HTTP para crear un nuevo videojuego.
Obtiene la información del videojuego del cuerpo de la solicitud.
Utiliza la función postVideogame para crear el nuevo videojuego en la base de datos.
Responde con un objeto JSON que contiene los detalles del videojuego recién creado.
En cada bloque try, se ejecutan las operaciones necesarias para cada función y, en caso de éxito, se responde con un código de estado HTTP 200 (éxito) y se envían los datos correspondientes. Si ocurre un error, se captura el error en el bloque catch y se responde con un código de estado HTTP 400 (error de solicitud) y un mensaje de error.

Finalmente, se exportan todas estas funciones controladoras para que puedan ser utilizadas en las rutas de la aplicación.

En resumen, este archivo define y exporta funciones controladoras que manejan solicitudes HTTP relacionadas con los videojuegos. Estas funciones interactúan con las funciones del controlador de videojuegos y gestionan operaciones como obtener listas de videojuegos, buscar videojuegos por nombre y crear nuevos videojuegos.

*/