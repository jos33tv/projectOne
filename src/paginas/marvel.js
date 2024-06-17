import '../cssPaginas/molde.css'
import Editorial from '../componentes/editorial';
import logo from '../logoDeEditoriales/Marvel-comics.png';
import ListaComic from '../componentes/listadeContenido';
import { Routes, Route } from 'react-router-dom';
import Leer from './read';

function Marvel() {
    return(
        <div id='div-molde'>
            <Editorial 
                name='Marvel Comics'
                img={logo}/>
            <ListaComic/>
            <Routes>
                <Route path='a' element={<Leer/>}/>
            </Routes>
        </div>
    );    
}

export default Marvel;