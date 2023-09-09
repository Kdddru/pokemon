import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Modal(props) {
  const pokemonId = useParams();
  const {state} = useLocation();
  

  

  useEffect(()=>{
    console.log(state)
  },[pokemonId])






  return (
    <div>
      <p>{state.name}</p>
      <img src={state.img} alt='사진'/>
    </div>
  )
}
