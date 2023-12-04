import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import style from './modal.module.scss'



const PrevBtn = () => {
  const navi = useNavigate();
  const {id} = useParams();
  

  const prev = () =>{
    if(id>1){
      setTimeout(()=> navi(`/pokemon/${id-1}`),100);
    }
    else{
      alert(`첫번째 페이지입니다`);
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
  const [pokemonInfo1, setPokemonInfo1] = useState();
  const [pokemonInfo2, setPokemonInfo2] = useState();
  const {id} = useParams();
  const {pokemon} = useSelector((state)=>state);


  //포켓몬 정보값
  const getData = async()=>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    //data들
    const data = await res.json();


    //타입 데이터 들고오기
    const typeData = await data.types
    let typesUrl = typeData.map((t)=>fetch(t.type.url)); 


    //최종 types
    const types = await Promise.all(typesUrl)
    .then((response)=>Promise.all(response.map((res)=>res.json())))
    .then((result)=>result.map((r)=>r.names[1].name))

    //특성 데이터 들고오기
    const abilityData = await data.abilities
    let abilityUrl = abilityData.map((a)=>fetch(a.ability.url));

    //최종 특성 데이터
    const abilities = await Promise.all(abilityUrl)
    .then((response)=>Promise.all(response.map((res)=>res.json())))
    .then((result)=>result.map((r)=>r.names[1].name))
    
    console.log(data)


    setPokemonInfo2({
      height : data.height,
      weight : data.weight,
      types: types,
      abilities : abilities
    })
  }
  


  //id값이 바뀔때마다
  useEffect(()=>{
    setPokemonInfo1(pokemon[id-1]);
    getData();
  },[pokemon,id])

  return(
    <div className={style.info}>
      {/**header */}
      <div className={style.header}>header</div>

      {/** main */}
      <div className={style.main}>
        {/** 포켓몬 기본데이터 */}
        {
          pokemonInfo1 && 
          <div>
            <p className={style.no}>{id<10 ? `00${id}`: id<100 ? `0${id}` : id}</p>
            <img 
            src = {`https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/${id<10 ? '000'+id : id<100 ? '00'+id : id<1000 ?'0' + id : id}01.png`} 
            alt="이미지" />
            <p className={style.name}>{pokemonInfo1.name}</p>
          </div>
        }

        {/**포켓몬 상세 데이터 */}
        {
          pokemonInfo2 && 
          <div>
            {/** 타입 데이터 */}
            <ul className={style.list}>
              <span>타입</span>
              <ul className={style.type}>
                {
                  pokemonInfo2.types.map((type,i)=>(
                  <li key={i} className={type}>{type}</li>
                ))
                }
              </ul>
            </ul>
            {/** 특성 데이터 */}
            <ul className={style.list}>
              <span>특성</span>
              <ul className={style.abilities}> 
                {
                  pokemonInfo2.abilities.map((a,i)=><li key={i}><span>{a}</span></li>)
                }
              </ul>
            </ul>
            <p>{(pokemonInfo2.height*0.1).toFixed(2)}m</p>
            <p>{(pokemonInfo2.weight*0.1).toFixed(2)}kg</p>
          </div>
        }
      </div>
      
      {/**buttom */}
      <div className={style.bottom}>bottom</div>
    </div>
  )
} 


const NextBtn = () =>{
  const navi = useNavigate();
  const {id} = useParams();

  const {pokemon} = useSelector((state)=>state);

  const next = () => {
    if(id == pokemon.length){
      alert('마지막 페이지입니다');
    }
    else{
      setTimeout(()=>navi(`/pokemon/${Number(id)+1}`),100);
    }
  }

  return(
    <div className={style.btn}
    onClick={next}
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