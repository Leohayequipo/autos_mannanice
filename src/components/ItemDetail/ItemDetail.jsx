import React, { useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCount from '../itemCount/itemCount';

const ItemDetail = ({products}) => {
  const {cartList,agregarAlCarrito} = useCartContext();
  const [contador, setContador] = useState(0);
  
  function onAdd(cant){
      setContador(cant);
      agregarAlCarrito({item: products,cantidad:cant});
  }
  return (
    <div className="container">
      <div className='row'>
        <div className='offset-lg-3 col-lg-6 mt-4 mb-4'>
          <Card >
            <Card.Img variant="top" src={products.image}/>
            <Card.Body>
              <Card.Title>CATEGORIA: {products.category}</Card.Title>
              <Card.Text>
                PRODUCTO: {products.name}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>AÑO: {products.year}</ListGroupItem>
              <ListGroupItem>KM: {products.km} </ListGroupItem>
              <ListGroupItem>PRECIO: ${products.price}</ListGroupItem>
              <ListGroupItem>STOCK: {products.stock}</ListGroupItem>

            </ListGroup>
            <Card.Body>
          {
            contador === 0 ?
              <ItemCount initial={1} stock={products.stock} onAdd={onAdd} /> 
            :
              <>
                <Link to='/'>
                  <Button variant="outline-primary" className="ml-4">SEGUIR COMPRANDO</Button>
                </Link>
                <Link to='/cart'>
                  <Button variant="outline-success">TERMINAR COMPRA</Button>
                </Link>
              </>
          }
           </Card.Body>
          </Card>
        </div>
      </div>
    </div>

  );
};

export default ItemDetail;
