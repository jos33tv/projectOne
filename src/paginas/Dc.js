import '../cssPaginas/molde.css'
import Editorial from '../componentes/editorial';
import logo from '../logoDeEditoriales/dc-comics.png';
import ListaComic from '../componentes/listadeContenido';
import { Routes, Route } from 'react-router-dom';
import Leer from './read';

function Dc() {
    return(
        <div id='div-molde'>
            <Editorial 
                name='Dc Comics'
                img={logo}/>
            <ListaComic/>
            <Routes>
                <Route path='a' element={<Leer/>}/>
            </Routes>
        </div>
    );    
}

export default Dc;