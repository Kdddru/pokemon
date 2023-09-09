import style from './home.module.scss'

import React from 'react'

import { useSelector } from 'react-redux';
import List from '../layout/List';



//header
const Header = () =>{
  return(
    <div className={style.header}>
      {/**버튼 */}
      <div className={style.botton}
      style={{
        bottom: '-3px',
        transform:'translateY(0)',
        borderBottom:'none',
        borderRadius: '100px 100px 0 0'
      }}>
      </div>
      {/**버튼 끝*/}
    </div>
  );
}

//main
const Main = () =>{
  const Data = useSelector(({pokemons})=>pokemons);
  console.log(Data);
  const pokemonNames = Data.pokemons
  const pokemons = pokemonNames && pokemonNames.map((pokemon,i)=>(
    {
      id : i+1,
      name : pokemon,
      img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    }
  ))
  

  return(
    <div className={style.main}>
      <ul className={style.pokemonList}>
      {
        Data && Data.status === 'Complite' ?
          pokemons && pokemons.map((pokemon,i)=>(
            <List key={i} pokemon = {pokemon}/>
          ))
          :
          <p>Loading....</p>
        }
      </ul>
    </div>
  );
}

//footer
const Footer = () =>{
  return(
    <div className={style.footer}>
      {/** 버튼 */}
      <div className={style.botton}
      style={{
        top:'-3px',
        transform:'translateY(0)',
        borderTop:'none',
        borderRadius: '0 0 100px 100px'
      }}>
      </div>
      {/** 버튼 끝*/}
    </div>
  )
}



export default function Home() {
  return (
    <div className={style.home}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
