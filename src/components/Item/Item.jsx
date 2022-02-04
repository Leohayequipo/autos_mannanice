import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Item = ({Id,Name,Stock,Price,Category,Km,Year,Foto}) => {
  return (

      <Col  key={Id} >
        <Card className='h-80' ml={4} style={{ width: '18rem', padding: '2%', margin:'5%' }}>
          <Card.Img variant="top" src={Foto} />
          <Card.Body >
            <Card.Title>{`${Name} - ${Year}`}</Card.Title>
            <Card.Text>
              El Vehiculo tiene una valor de ${`${Price}`} pesos Argentinos.
               
            </Card.Text>
            <Link to={`/detalle/${Id}`} >
              <Button variant="primary">+ Info</Button>
            </Link>
          </Card.Body>
        </Card>  
      </Col>
  );
};

export default Item;
