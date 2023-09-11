import React from 'react'
import style from '../card/Card.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function Card({game}) {
  return (
    <div className={style.Card}>
      <h3>{game.id}</h3>
      <img className={style.CardImg} src={game.background_image} alt="imagen del juego" />
      <h3>{game.name}</h3>
      <p>{game.genres.join('-')}</p>
      <p>{game.rating}</p>

      <Link className={style.Pdetail} to={`/detail/${game.id}`}>
      <samp className={style.Pdetail}>Detalle</samp>
      </Link>
    </div>
  )
}

export default Card