import '../cssDeComponentes/home.css';
import Tarjetas from '../componentes/cards.js';
import * as portada from '../componentes/imagenesImportadas.js';
import Carrusel from '../componentes/corrusel.js'

function Home() {
    return (
        <div className='content'>
            <h2>Actualizaciones</h2>
            <div className='div-tarjeta'>
            <Tarjetas
                img={portada.Boom1}
                title="MANS BEST"
                description = "Homeward Bound en un mundo alienígena, MAN'S BEST sigue a tres mascotas de apoyo emocional que viven en la nave espacial Starship Horizona en busca de un nuevo hogar para albergar a una humanidad comprometida por malas decisiones y codicia corporativa. Pero después de los accidentes de barco y la tripulación es capturada, estas mascotas leales son la única esperanza de su dueña. Equipados con tecnología escandalosa, estos tres mejores amigos deben atravesar un mundo hostil para rescatar a sus dueños, dejándolos la única esperanza para una humanidad que podría no valer la pena salvarla. En una aventura desgarradora, las mascotas se enfrentan a desafíos que amenazan con destruir su tesoro más valioso: su amistad."
            />
            <Tarjetas
                img={portada.Vertigo1}
                title="V de vendeta"
                description = "Ambientada en una futura Inglaterra imaginaria que se ha entregado al fascismo, esta historia revolucionaria captura tanto la naturaleza sofocante de la vida en un estado policial autoritario como el poder redentor del espíritu humano que se rebela contra él. Elaborada con una claridad e inteligencia inigualables, V de Vendetta aporta una profundidad de caracterización y verosimilitud sin igual a su relato inquebrantable de opresión y resistencia."
            />
            <Tarjetas
                img={portada.Vertigo2}
                title="THE LAST MAN"
                description = " En 2002, el mundo cambia definitivamente. Así, de la nada, cada hombre, niño, mamífero con un cromosoma Y muere…"
            />
            <Tarjetas
                img={portada.Image1}
                title="Invencible"
                description = "La única diferencia entre Mark y todos los demás es que su padre es el superhéroe más poderoso del planeta y, últimamente, parece estar heredando los poderes de su padre. Lo cual suena bien al principio, pero ¿Cómo sigues los pasos de tu padre cuando sabes que nunca estarás a la altura de sus estándares?"
            />
            <Tarjetas
                img={portada.Horse1}
                title="Hellboy"
                description = "Hellboy es el hijo de una bruja descendiente del rey Arturo que se arrepintió de sus pactos con uno de los señores del infierno en el lecho de su muerte, pero el gran señor reclamó su alma y se la llevó al infierno, allí tuvo lugar su unión y Hellboy nació como un demonio cualquiera; sin embargo, al poco tiempo de nacer, su padre le cortó el brazo derecho y le puso el conocido brazo de piedra, llave del apocalipsis."
            />
            <Tarjetas
                img={portada.Marvel1}
                title="Old Man Logan"
                description = "Durante 50 años, nadie ha oído hablar de él a escondidas… y en su lugar se encuentra un anciano llamado Logan. Un hombre que sólo se preocupa por su familia. Un hombre al que la banda de HULK empujó al borde del abismo. Un hombre obligado a ayudar a un viejo amigo, el arquero ciego, HAWKEYE, a conducir tres mil millas para asegurar la seguridad de su familia. Prepárate para el viaje de tu vida, Logan."
            />
            </div>
            <h2>nuevos</h2>
            <Carrusel/>
        </div>
    );
  }
  
  export default Home;
  