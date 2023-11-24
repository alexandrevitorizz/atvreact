import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import  Sobre from './components/pages/Sobre'
import Servicos from './components/pages/Servicos'
import Contato from './components/pages/Contato'
import { IoMdHome } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { GiAmmoBox } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";



function App() {
  return (
    <div>
      <h1 className='title'>IMPERIAL ROUPAS</h1>
      <ul className="roupass">
      <img src='https://www.mirassolconectada.com.br/wp-content/uploads/2021/02/DRESS-UP-ROUPAS-MASCULINAS-1024x576.jpg'></img>
      </ul>
      <BrowserRouter>
      <ul className="menu">
          <li><Link to="/"><IoMdHome />Home</Link></li>
          <li><Link to="/Sobre"><FaRegUserCircle />Sobre</Link></li>
          <li><Link to="/Servicos"><GiAmmoBox />Serviços</Link></li>
          <li><Link to="/Contato"><FaUserGroup />Contato</Link></li>
        </ul>
        <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Servicos' element={<Servicos />} />
          <Route path='/Contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
      <p>Esse é o rodapé</p>
    </div>
  );
}

export default App;