import '../cssPaginas/molde.css'
import Editorial from '../componentes/editorial';
import logo from '../logoDeEditoriales/boom-comics.jpg';
import ListaComic from '../componentes/listadeContenido';
import { Routes, Route } from 'react-router-dom';
import Leer from './read';

function Boom() {
    return(
        <div id='div-molde'>
            <Editorial 
                name='Boom Comics'
                img={logo}/>
            <ListaComic/>
            <Routes>
                <Route path='a' element={<Leer/>}/>
            </Routes>
        </div>
    );    
}

export default Boom;