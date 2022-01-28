import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Item = ({Id,Name,Stock,Price,Category,Km,Year,Foto}) => {
  return (
      <div  key={Id} >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Foto} />
          <Card.Body>
            <Card.Title>{`${Name} - ${Year}`}</Card.Title>
            <Card.Text>
              El Vehiculo tiene una valor de ${`${Price}`} pesos Argentinos.
               
            </Card.Text>
            <Link to={`/detalle/${Id}`} >
              <Button variant="primary">+ Info</Button>
            </Link>
          </Card.Body>
        </Card>  
      </div>
  );
};

export default Item;
