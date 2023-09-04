import style from './home.module.scss'

import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import List from '../layout/List';




const Header = () =>{
  return(
    <div className={style.header}>
      Header
    </div>
  );
}


const Body = () =>{

  const Data = useSelector(({pokemons})=>pokemons);
  const [pokemonData,setPokemonData] = useState([]);
  const pokemons = pokemonData && pokemonData.map((pokemon,i)=>(
    {
      id : i+1,
      name : pokemon,
      img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    }
  ))

  useEffect(()=>{
    setPokemonData(Data.pokemons);
  },[Data]);
  

  return(
    <div>
      <ul className={style.pokemonList}>
        {pokemons && pokemons.map((pokemon,i)=>(
          <List key={i} pokemon = {pokemon}/>
        ))}
      </ul>
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
