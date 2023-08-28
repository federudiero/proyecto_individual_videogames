const { Router } = require("express");
const { getGenresHandler } = require("../handlres/genresHandlers");

const genresRouter = Router();

genresRouter.get("/", getGenresHandler);

module.exports = genresRouter;









/*

Este archivo define un enrutador (router) específico para gestionar las rutas relacionadas con los géneros de videojuegos en una aplicación Express. Vamos a analizar cada parte del código:

Importaciones:

const { Router } = require("express");: Importa el objeto Router de Express, que se utiliza para definir las rutas y manejar las solicitudes HTTP asociadas a esas rutas.
const { getGenresHandler } = require("../handlres/genresHandlers");: Importa la función controladora getGenresHandler del módulo genresHandlers ubicado en la carpeta handlres.
Creación del enrutador:

const genresRouter = Router();: Crea un nuevo enrutador utilizando la función Router() de Express. Este enrutador se utilizará para definir las rutas relacionadas con los géneros de videojuegos.
Definición de rutas:

genresRouter.get("/", getGenresHandler);: Define una ruta GET en el enrutador. Cuando se realice una solicitud HTTP GET a la ruta base ("/") de este enrutador, se invocará la función controladora getGenresHandler para manejar la solicitud.
Exportación del enrutador:

module.exports = genresRouter;: Exporta el enrutador para que pueda ser utilizado en otros archivos, generalmente en el archivo principal de la aplicación, para montar las rutas en la aplicación Express.
En resumen, este archivo define un enrutador para las rutas relacionadas con los géneros de videojuegos. Estas rutas son manejadas por la función controladora getGenresHandler, que se ejecutará cuando se realice una solicitud GET a la ruta base del enrutador. Luego, este enrutador se puede montar en la aplicación principal de Express para gestionar las rutas relacionadas con los géneros.

*/