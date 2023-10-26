import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './modal.module.scss'


const PrevBtn = (props) => {
  const navi = useNavigate();
  const {id} = useParams();
  

  const prev = () =>{
    if(id>1){
      navi(`/pokemon/${id-1}`)
    }
    else{
      alert(`첫번째 페이지입니다`)
    }
  }
  

  return(
    <div className={style.btn}
      onClick={prev}
    >
      prevBtn
    </div>
  )
}

const InfoStatus = () =>{

  return(
    <div className={style.info}>
    </div>
  )
} 

const NextBtn = () =>{
  const navi = useNavigate();
  const {id} = useParams();

  return(
    <div className={style.btn}
    onClick={()=>{navi(`/pokemon/${Number(id)+1}`)}}
    >
      nextBtn
    </div>
  )
}



const Modal = () => {

  return (
    <div className={style.modal}>
      <PrevBtn/>
      <InfoStatus/>
      <NextBtn/>
    </div>
  )
}
export default Modal