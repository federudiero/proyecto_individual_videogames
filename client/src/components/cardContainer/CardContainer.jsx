import Card from '../card/Card'
import { useSelector } from 'react-redux'
import style from '../cardContainer/CardContainer.module.css'

function CardContainer({slicePage}) {
  
  return (
    <div className={style.CardContainer}>
    {slicePage && slicePage.map((videojuego)=>{


      return <Card 
          game={videojuego}
          key={videojuego.id}
      />

    })}
    
    </div>
  )
}

export default CardContainer