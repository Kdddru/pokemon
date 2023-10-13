import style from './home.module.scss'

import React, { useEffect, useState } from 'react'



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
  let [pokemons, setpokemons] = useState([]);

  const getData = async() =>{

    let api = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    let data = await api.json();
    let pokemons = data.results;

    const pokemonDatas = pokemons && pokemons.map((pokemon, index)=>({
      id : index+1,
      name : pokemon.name,
      img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
    }))

    pokemonDatas && setpokemons(pokemonDatas);

  }



  useEffect(()=>{
    getData();    
  },[])

  return(
    <div className={style.main}>
      <ul className={style.pokemonList}>
        {pokemons && pokemons.map((p)=>(
          <li key={p.id}>
            <img src={p.img} alt='이미지'/>
            <p>{p.name}</p>
          </li>
        ))}
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
