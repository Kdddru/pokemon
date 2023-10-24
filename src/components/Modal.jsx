import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import style from './modal.module.scss'



const PrevBtn = (props) => {
  const navi = useNavigate();
  let {id} = props.id

  

  return(
    <div className={style.btn}
    onClick={()=>{navi(`/pokemon/${Number(id)-1}`)}}
    >
      prevBtn
    </div>
  )
}

const InfoStatus = () =>{
  const {state} = useLocation();

  console.log(state)

  return(
    <div className={style.info}>
      <p>{state.id}</p>
      <p>{state.name}</p>
    </div>
  )
} 

const NextBtn = (props) =>{
  const navi = useNavigate();
  let {id} = props.id

  return(
    <div className={style.btn}
    onClick={()=>{navi(`/pokemon/${Number(id)+1}`)}}
    >
      nextBtn
    </div>
  )
}



const Modal = () => {
  const pokemonId = useParams();


  return (
    <div className={style.modal}>
      <PrevBtn id={pokemonId}/>
      <InfoStatus/>
      <NextBtn id={pokemonId}/>
    </div>
  )
}
export default Modal