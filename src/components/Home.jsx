import style from './home.module.scss'

import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../Store/pokemonSlice';
import Card from '../layout/Card';




const Header = () =>{
  return(
    <div className={style.header}>
      Header
    </div>
  );
}


const Body = () =>{
  const dispatch = useDispatch();
  const pokemons = useSelector(({pokemons})=>pokemons.koNames);
  
  useEffect(()=>{
    dispatch(getPokemon());
  },[])

  return(
    <div>
      {pokemons && pokemons.map((pokemon,i)=>(
        <Card key={i} pokemon={pokemon}/>
      ))}
    </div>
  );
}




export default function Home() {
  return (
    <div className={style.home}>
      <Header/>
      <Body/>
    </div>
  )
}
