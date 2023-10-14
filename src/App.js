import { Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './components/Home';
import Modal from './components/Modal';

function App() {

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
