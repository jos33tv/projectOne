import '../cssDeComponentes/listaDeContenido.css'
import { Outlet, Link } from 'react-router-dom';

function ListaComic() {
    return(
        <div id="div-listaComic">
            <h2>Lista de comics</h2>
            <ul>
                <li><Link className='tems' to="a" >Comic1</Link></li>
                <li><Link className='tems' to="a" >Comic2</Link></li>
                <li><Link className='tems' to="a" >Comic3</Link></li>
                <li><Link className='tems' to="a" >Comic4</Link></li>
                <li><Link className='tems' to="a" >Comic5</Link></li>
                <li><Link className='tems' to="a" >Comic6</Link></li>
                <li><Link className='tems' to="a" >Comic7</Link></li>
                <li><Link className='tems' to="a" >Comic8</Link></li>
                <li><Link className='tems' to="a" >Comic10</Link></li>
                <li><Link className='tems' to="a" >Comic11</Link></li>
                <li><Link className='tems' to="a" >Comic12</Link></li>
                <li><Link className='tems' to="a" >Comic13</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
}
export default ListaComic;