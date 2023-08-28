import React from 'react'

function Card(props) {
  return (
    <div>
      <h1>{props.id}</h1>
      <h2>{props.name}</h2>
      <h3>{props.genero}</h3>

    </div>
  )
}

export default Card