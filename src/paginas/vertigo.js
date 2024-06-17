import '../cssPaginas/molde.css'
import Editorial from '../componentes/editorial';
import logo from '../logoDeEditoriales/vertigo-comics.png';
import ListaComic from '../componentes/listadeContenido';
import { Routes, Route } from 'react-router-dom';
import Leer from './read';

function Vertigo() {
    return(
        <div id='div-molde'>
            <Editorial 
                name='Vertigo Comics'
                img={logo}/>
            <ListaComic/>
            <Routes>
                <Route path='a' element={<Leer/>}/>
            </Routes>
        </div>
    );    
}

export default Vertigo;