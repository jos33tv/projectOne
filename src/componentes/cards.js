import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../cssDeComponentes/cards.css';

function Tarjetas( props ) {
  return (
    <Card id="cartas" style={{ width: '18rem' }}>
      <Card.Img id="cartas-img" variant="top" src={props.img}/>
      <Card.Body id='card-body'>

        <Card.Title>{props.title}</Card.Title>
        <Card.Text id='card-text'>{props.description}</Card.Text>

        <Button variant="primary">Leer</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjetas;