import '../cssDeComponentes/barraDeNavegacion.css'
import { Outlet, Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="div-nav">
      <ul id="list-nav" >
        <li><Link className='items' to="/" >Home</Link></li>
        <li><Link className='items' to="DC Comics" >DC Comics</Link></li>
        <li><Link className='items' to="Marvel" >Marvel</Link></li>
        <li><Link className='items' to="Dark Horse" >Dark Horse</Link></li>
        <li><Link className='items' to="Boom! Comics" >Boom! Comics</Link></li>
        <li><Link className='items' to="IDW publish" >IDW publish</Link></li>
        <li><Link className='items' to="Image Comics" >Image Comics</Link></li>
        <li><Link className='items' to="Vertigo Comics" >Vertigo Comics</Link></li>
      </ul>
      <Outlet/>
    </div>
  );
}
export default Nav;