import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Item = ({Id,Name,Stock,Price,Category,Km,Year,Foto}) => {
  return (

      <Col  key={Id} >
        <Card  ml={4} style={{  padding: '2%', margin:'2%' }}>
          <Card.Img variant="top" src={Foto} />
          <Card.Body >
            <Card.Title>{`${Name} - ${Year}`}</Card.Title>
            <Card.Text>
              El Vehiculo tiene un valor de ${`${Price}`} pesos Argentinos.
              Cantidad disponibles: {`${Stock}`} 
            </Card.Text>
            <Link to={`/detalle/${Id}`} >
              <Button variant="dark">+ INFO</Button>
            </Link>
          </Card.Body>
        </Card>  
      </Col>
  );
};

export default Item;
