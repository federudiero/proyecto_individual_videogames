const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videogamesRouter = require("./videogamesRouter");
const genresRouter = require("./genresRouter");

const routes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routes.use("/videogames", videogamesRouter);

routes.use("/genres", genresRouter);
 


module.exports = routes;













/*
Este archivo actúa como un punto de entrada para todos los enrutadores en tu aplicación Express. Su función principal es definir y configurar las rutas raíz de cada uno de los enrutadores que manejan diferentes aspectos de la aplicación. Aquí está el análisis del archivo:

Importaciones:

const { Router } = require('express');: Importa el objeto Router de Express para crear y configurar las rutas.
Importación de Enrutadores:

Se importan dos enrutadores: videogamesRouter y genresRouter desde los archivos videogamesRouter.js y genresRouter.js respectivamente. Estos enrutadores contienen las rutas y las funciones controladoras asociadas a cada aspecto de la aplicación (videojuegos y géneros).
Configuración de las Rutas:

const routes = Router();: Crea un nuevo objeto de enrutador utilizando Router().
Configuración de los Enrutadores:

routes.use("/videogames", videogamesRouter);: Monta el enrutador videogamesRouter bajo la ruta base /videogames. Esto significa que todas las rutas definidas en videogamesRouter estarán disponibles bajo /videogames.
routes.use("/genres", genresRouter);: Monta el enrutador genresRouter bajo la ruta base /genres. Esto significa que todas las rutas definidas en genresRouter estarán disponibles bajo /genres.
Exportación de las Rutas Configuradas:

module.exports = routes;: Exporta el enrutador principal routes configurado con los enrutadores para que pueda ser utilizado en el archivo principal de tu aplicación para manejar todas las rutas.
En resumen, este archivo centraliza la configuración de las rutas raíz para diferentes aspectos de tu aplicación (videojuegos y géneros) mediante la montura de los enrutadores específicos en rutas predefinidas. Luego, el enrutador principal routes se exporta para que pueda ser montado en el archivo principal de la aplicación Express.

*/