import Editorial from '../componentes/editorial';
import logo from '../logoDeEditoriales/image-comics.png';
import ListaComic from '../componentes/listadeContenido.js'
import '../cssPaginas/molde.css';
import { Routes, Route } from 'react-router-dom';
import Leer from './read';

function Image() {
    return(
        <div id='div-molde'>
            <Editorial 
                name='Image Comics'
                img={logo}/>
            <ListaComic/>
            <Routes>
                <Route path='a' element={<Leer/>}/>
            </Routes>
        </div>
    );    
}

export default Image;