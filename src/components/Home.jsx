import { useSelector } from 'react-redux';
import style from './home.module.scss'

import React from 'react'



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
  const {pokemon} = useSelector((state)=>state);
  const pokemonInfo = pokemon && pokemon.name.map((p,i)=>({
    id : i+1,
    name : p,
    img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
  }));

  return(
    <div className={style.main}>
      <ul className={style.pokemonList}>
        {
          pokemonInfo.map((p)=>(
            <li key={p.id}>
              {p.id < 10 ? `00` + p.id : p.id<100 ? `0` + p.id : p.id }
              <img src={p.img} alt="" />
              <span>{p.name}</span>
            </li>
          ))
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



const Home = () => {
  return (
    <div className={style.home}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home