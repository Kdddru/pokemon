import { useSelector } from 'react-redux';
import style from './home.module.scss'

import React from 'react'
import { useNavigate } from 'react-router-dom';



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
  const navi = useNavigate();
  const {pokemon} = useSelector((state)=>state);
  

  return(
    <div className={style.main}>
      <ul className={style.pokemonList}>
        {
          pokemon && pokemon.map((p)=>(
            <li key={p.id}
            onClick={()=>{navi(`/pokemon/${p.id}`)}}
            >
              {p.id < 10 ? `00` + p.id : p.id<100 ? `0` + p.id : p.id }
              <img src={p.img} alt="이미지" />
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