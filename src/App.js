import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/type.css'


import Home from './components/Home';
import Modal from './components/Modal';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getPokemonName } from './slice/pokemonSlice';

function App() {
  const dispatch = useDispatch();


  //포켓몬 데이터 들고오기
  useEffect(()=>{ 
    dispatch(getPokemonName())
  },[])

  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/pokemon/:id' element={<Modal/>}/>
      </Routes>
    </div>
  );
}

export default App;
