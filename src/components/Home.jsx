import { useNavigate } from 'react-router-dom';
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
  const navi = useNavigate();
  let [num, setNum] = useState(20);
  const [pokemons, setpokemons] = useState([]);
  const [names, setNames] = useState();

  //포켓몬 데이터 들고오기
  const getData = async() =>{
    let url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit= ${num}`;

    let api = await fetch(url);
    let data = await api.json();
    let pokemons = data.results;

    const pokemonDatas = pokemons && pokemons.map((pokemon, index)=>({
      id : index+1,
      name : pokemon.name,
      img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
    }))

    pokemonDatas && setpokemons(pokemonDatas);

  }
  
  //한국이름 들고오기
  const getKoreanName = async() =>{
    const pokemonKoreanNames = [];
    const urls =[];
    
    for(let i=0; i<num; i++){
      let url = `https://pokeapi.co/api/v2/pokemon-species/${i+1}`
      urls.push(url);
    }

    let requests = urls.map((url)=> fetch(url));

    await Promise.all(requests)
    .then((response)=>Promise.all(response.map((res)=>res.json())))
    .then((results)=> {
      for(let result of results){
        pokemonKoreanNames.push(result.names[2].name);
      }
    })
    
    setNames(pokemonKoreanNames);
  }


  //실행시 포켓몬데이터, 포켓몬 한국이름 들고오기
  useEffect(()=>{
    getData();
    getKoreanName(); 
  },[num])


  console.log(num)

  return(
    <div className={style.main}>
      <ul className={style.pokemonList}>
        {pokemons && pokemons.map((p,i)=>(
          <li key={p.id} 
          onClick={()=>{
            navi(`/pokemon/${i+1}`,{state:{
              id: p.id,
              name : names[i],
              img : p.img,
            }})
          }}>

            {p.id < 10 ? `00` + p.id : p.id<100 ? `0` + p.id : p.id }
            <img src={p.img} alt='이미지'/>
            <span>{names && names[i]}</span>
          </li>
        ))}
      </ul>
      <p onClick={()=>{setNum(num+20)}}>+</p>
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