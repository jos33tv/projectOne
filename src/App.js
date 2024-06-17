import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './paginas/home.js';
import Header from './componentes/header.js';
import Nav from './componentes/barraDeNavegacion.js'
import Footer from './componentes/footer.js';
import Dc from './paginas/Dc.js';
import Marvel from './paginas/marvel.js';
import DarkHorse from './paginas/darkHorse.js';
import Boom from './paginas/boom.js';
import Idw from './paginas/idw.js';
import Image from './paginas/imageComics.js';
import Vertigo from './paginas/vertigo.js';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='DC Comics/*' element={<Dc/>}/>
        <Route path='Marvel/*' element={<Marvel/>}/>
        <Route path='Dark Horse/*' element={<DarkHorse/>}/>
        <Route path='Boom! Comics/*' element={<Boom/>}/>
        <Route path='IDW publish/*' element={<Idw/>}/>
        <Route path='Image Comics/*' element={<Image/>}/>
        <Route path='Vertigo Comics/*' element={<Vertigo/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
