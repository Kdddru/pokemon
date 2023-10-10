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
  

  return(
    <div className={style.main}>
      <ul className={style.pokemonList}>
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
