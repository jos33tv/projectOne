import twitter from '../iconos/twitter.svg'
import telegram from '../iconos/telegrama.svg'
import whatssap from '../iconos/whatsapp.svg'
import reddit from '../iconos/reddit.svg'
import Enlace from './enlaceConSvg.js'
import '../cssDeComponentes/header.css'

function Header() {
  return(
    <div className="div-header">
      <div>
        <h1 id='tituloHeader'>ProjectComic</h1>
      </div>
      <div className='iconos'>
        <Enlace
          link="#"
          icon={twitter}/>
        
        <Enlace
          link="#"
          icon={reddit}/>
        
        <Enlace
          link="#"
          icon={telegram}/>
        
        <Enlace
          link="#"
          icon={whatssap}/>
        
      </div>
    </div>
  );
}
export default Header;