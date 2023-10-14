import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Modal(props) {
  const pokemonId = useParams();
  const {state} = useLocation();
  

  


  console.log(state)




  return (
    <div>
      <img src={state.img} alt="이미지" />
      <p>{state.name}</p>
    </div>
  )
}
