import React from 'react'

export default function List(props) {
  const {pokemon} = props

  
  return (
    <li>
      {pokemon.id}
      <img src={pokemon.img} alt='사진' width={60} height={60}/>
      <span>{pokemon.name}</span>
    </li>
  )
}
