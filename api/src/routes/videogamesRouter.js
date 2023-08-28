const { Router } = require("express");
const {
  getVideogamesHandler,
  getVideogameByNameHandler,
  getVideogameByIdHandler,
  postVideogameHandler,
} = require("../handlres/videogamesHandlers");

const videogamesRouter = Router();

videogamesRouter.get("/", getVideogamesHandler);
//http://localhost:3001/videogames/
videogamesRouter.get("/name", getVideogameByNameHandler);
//http://localhost:3001/videogames/name?search=Counter-Strike: Global Offensive

videogamesRouter.get("/:idVideogame", getVideogameByIdHandler);
//http://localhost:3001/videogames/174721
videogamesRouter.post("/", postVideogameHandler);
//http://localhost:3001/videogames y el json 

/*
{
  "name": "The Legend of Zelda: Breath of the Wild 4",
  "description": "An action-adventure game set in a vast open world.",
  "platforms": ["Nintendo Switch", "Wii U"],
  "background_image": "https://example.com/zelda_image.jpg",
  "released": "2017-03-03",
  "ra
*/

module.exports = videogamesRouter;
















/*
Este archivo define un enrutador (router) específico para gestionar las rutas relacionadas con los videojuegos en una aplicación Express. Vamos a analizar cada parte del código:

Importaciones:

const { Router } = require("express");: Importa el objeto Router de Express, que se utiliza para definir las rutas y manejar las solicitudes HTTP asociadas a esas rutas.
const {...} = require("../handlres/videogamesHandlers");: Importa las funciones controladoras getVideogamesHandler, getVideogameByNameHandler, getVideogameByIdHandler y postVideogameHandler del módulo videogamesHandlers ubicado en la carpeta handlres.
Creación del enrutador:

const videogamesRouter = Router();: Crea un nuevo enrutador utilizando la función Router() de Express. Este enrutador se utilizará para definir las rutas relacionadas con los videojuegos.
Definición de rutas:

videogamesRouter.get("/", getVideogamesHandler);: Define una ruta GET en el enrutador. Cuando se realice una solicitud HTTP GET a la ruta base ("/") de este enrutador, se invocará la función controladora getVideogamesHandler para manejar la solicitud.
videogamesRouter.get("/name", getVideogameByNameHandler);: Define una ruta GET en el enrutador con el segmento "/name". Cuando se realice una solicitud HTTP GET a esta ruta ("/name"), se invocará la función controladora getVideogameByNameHandler para manejar la solicitud.
videogamesRouter.get("/:idVideogame", getVideogameByIdHandler);: Define una ruta GET en el enrutador con un parámetro dinámico idVideogame. Cuando se realice una solicitud HTTP GET a una ruta que coincida con el patrón "/:idVideogame", se invocará la función controladora getVideogameByIdHandler para manejar la solicitud.
videogamesRouter.post("/", postVideogameHandler);: Define una ruta POST en el enrutador. Cuando se realice una solicitud HTTP POST a la ruta base ("/") de este enrutador, se invocará la función controladora postVideogameHandler para manejar la solicitud.
Exportación del enrutador:

module.exports = videogamesRouter;: Exporta el enrutador para que pueda ser utilizado en otros archivos, generalmente en el archivo principal de la aplicación, para montar las rutas en la aplicación Express.
En resumen, este archivo define un enrutador para las rutas relacionadas con los videojuegos. Las rutas GET y POST son manejadas por funciones controladoras específicas (getVideogamesHandler, getVideogameByNameHandler, getVideogameByIdHandler y postVideogameHandler) que se ejecutarán cuando se realicen solicitudes a las rutas correspondientes. Luego, este enrutador se puede montar en la aplicación principal de Express para gestionar las rutas relacionadas con los videojuegos.

*/