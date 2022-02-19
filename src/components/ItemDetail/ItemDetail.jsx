import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
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
      <div className='row'>
        <div className='col'>
          <h1>La categoria:{products.category}</h1>
          <h4>Nombre:{products.name}</h4>
          <h4>${products.price}</h4>
        </div>
        <div className='col'>
          {
            contador === 0 ?
              <ItemCount initial={1} stock={6} onAdd={onAdd} /> 
            :
              <>
                <Link to='/'>
                  <Button variant="outline-primary">SEGUIR COMPRANDO</Button>
                </Link>
                <Link to='/cart'>
                  <Button variant="outline-success">TERMINAR COMPRA</Button>
                </Link>
                
              </>
          }
        </div>
      </div>
  );
};

export default ItemDetail;
