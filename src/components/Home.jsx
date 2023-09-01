import style from './home.module.scss'

import React from 'react'

import { useSelector } from 'react-redux';
import Card from '../layout/Card';




const Header = () =>{
  return(
    <div className={style.header}>
      Header
    </div>
  );
}


const Body = () =>{
  const pokemons = useSelector(({pokemons})=>pokemons.koNames);

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
