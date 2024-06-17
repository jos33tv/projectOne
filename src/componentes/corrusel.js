import Carousel from 'react-bootstrap/Carousel';
import * as comic from './imagenesImportadas';
import '../cssDeComponentes/carousel.css'

 
function Carrusel() {
  return (
    <Carousel id='todo-carousel'>
      <Carousel.Item className='item'>
        <img className='img-carousel'src={ comic.Boom1 }/>
        <Carousel.Caption className='caption'>
          <h3>Title</h3>
          <p>Descripcion</p>
        </Carousel.Caption>              
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img className='img-carousel'src={ comic.Image1 }/>
        <Carousel.Caption className='caption'>
          <h3>Title</h3>
          <p>Descripcion</p>
        </Carousel.Caption>              
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img className='img-carousel'src={ comic.Idw1 }/>
        <Carousel.Caption className='caption'>
          <h3>Title</h3>
          <p>Descripcion</p>
        </Carousel.Caption>              
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img className='img-carousel'src={ comic.Idw2 }/>
        <Carousel.Caption className='caption'>
          <h3>Title</h3>
          <p>Descripcion</p>
        </Carousel.Caption>              
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img className='img-carousel'src={ comic.Dc1 }/>
        <Carousel.Caption className='caption'>
          <h3>Title</h3>
          <p>Descripcion</p>
        </Carousel.Caption>              
      </Carousel.Item>

    </Carousel>    
  );
}

export default Carrusel;