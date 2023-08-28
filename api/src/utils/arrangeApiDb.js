const arrangeApi= (data) => {
    
    let { id, name, platforms, background_image, released, rating, genres } =data;
    
    genres = genres.map((gen) => gen.name);

    platforms = platforms.map((plat) => {
      const { platform } = plat;
      return platform.name;
    });
    
    return {id,name,platforms,background_image,released,rating,genres};
  };
  


  const arrangeApiId = (data) => {
    
    let { id,name,description,platforms,background_image,released,rating,genres,} = data;
    
    platforms = platforms.map((plat) => {
      const { platform } = plat;
      return platform.name;
    });
    
    genres = genres.map((gen) => gen.name);
    
    return {id,name,description,platforms,background_image,released,rating,genres};
  };
  



  const arrangeDb = (data) => {
   
    let { id, name, platforms, background_image, released, rating, genres } =data;
    
    genres = genres.map((gen) => gen.name);
   
    return {id,name,platforms,background_image,released,rating:Number(rating),genres};
  };
  



  const arrangeDbId = (data) => {
   
    let {id,name,description,platforms,background_image,released,rating,genres} = data;
   
    genres = genres.map((gen) => gen.name);
   
    return {id,name,platforms,background_image,released,rating:Number(rating),genres};
  };
  
  module.exports = {
    arrangeApi,
    arrangeApiId,
    arrangeDb,
    arrangeDbId,
  };











  /*

Este archivo contiene una serie de funciones para dar formato y organizar los datos recibidos de la API y la base de datos. Estas funciones se utilizan para procesar los datos antes de devolverlos en las funciones de obtención de datos y creación de nuevos registros. Vamos a analizar cada función:

arrangeApiData(data): Esta función toma los datos recibidos de la API y realiza las siguientes transformaciones:

Destructura los datos en variables locales.
Procesa la información de las plataformas y géneros para obtener solo los nombres relevantes.
Devuelve un objeto con los datos procesados.
arrangeApiDataId(data): Similar a la función anterior, pero esta función está diseñada para procesar los datos de un videojuego específico por su ID. Realiza las mismas transformaciones que arrangeApiData y agrega la descripción del videojuego.

arrangeDbData(data): Esta función toma los datos de la base de datos y realiza las siguientes transformaciones:

Destructura los datos en variables locales.
Procesa la información de los géneros para obtener solo los nombres relevantes.
Convierte la calificación a tipo numérico.
Devuelve un objeto con los datos procesados.
arrangeDbDataId(data): Similar a la función anterior, pero esta función está diseñada para procesar los datos de un videojuego específico por su ID. Realiza las mismas transformaciones que arrangeDbData y agrega la descripción del videojuego.

Finalmente, se exportan todas estas funciones para que puedan ser importadas y utilizadas en otros archivos.

Estas funciones de organización y formato son importantes para asegurar que los datos que se envían a través de la API y la base de datos tengan una estructura coherente y predecible, lo que facilita el manejo y la presentación de la información en la aplicación.

  */