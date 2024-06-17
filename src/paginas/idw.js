import '../cssPaginas/molde.css'
import Editorial from '../componentes/editorial';
import logo from '../logoDeEditoriales/idw.png';
import ListaComic from '../componentes/listadeContenido';
import { Routes, Route } from 'react-router-dom';
import Leer from './read';

function Idw() {
    return(
        <div id='div-molde'>
            <Editorial 
                name=''
                img={logo}/>
            <ListaComic/>
            <Routes>
                <Route path='a' element={<Leer/>}/>
            </Routes>
        </div>
    );    
}

export default Idw;