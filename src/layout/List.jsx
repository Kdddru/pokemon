import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function List(props) {
  const navi = useNavigate();
  const {pokemon} = props
  
  return (
    <li onClick={()=>{navi(`pokemon/${pokemon.id}`, {
      state : pokemon
    })}}>
      {pokemon.id < 10 ? `0${pokemon.id}`: pokemon.id }
      {<img src={pokemon.img} alt='사진' width={60} height={60}/>}
      <span>{pokemon.name}</span>
    </li>
  )
}
