import React from 'react'
import Card from '../card/Card'



const videojuegos= [
  {id:1,name:'residen evil 1',genero:'terror'},
  {id:2,name:'residen evil 2',genero:'terror'},
  {id:3,name:'residen evil 3',genero:'terror'},
  {id:4,name:'residen evil 4',genero:'terror'},
  {id:5,name:'residen evil 5',genero:'terror'}
]



function CardContainer() {
  return (
    <div>aca voy a renderizar el card
    
    {videojuegos.map((videojuego)=>{


      return <Card 
      id={videojuego.id}
      name={videojuego.name}
      genero={videojuego.genero}
      />

    })}
    
    </div>
  )
}

export default CardContainer