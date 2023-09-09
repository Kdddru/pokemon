import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { getPokemon } from './Store/pokemonSlice';

import Home from './components/Home';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPokemon());
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
