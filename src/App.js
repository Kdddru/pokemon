import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { getPokemon } from './Store/pokemonSlice';

import Home from './components/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPokemon());
  },[])

  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
