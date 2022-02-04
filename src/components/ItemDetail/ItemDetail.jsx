import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/itemCount';

const ItemDetail = ({products}) => {
  const [contador, setContador] = useState(0);
  function onAdd(cant){
    setContador(cant);
    //console.log(cant);
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
                <Link to='/cart'>
                   <button>Terminar compra</button>
                </Link>
                <Link to='/'>
                  <button>Seguir comprando</button>
                </Link>
                
              </>
          }
          
        </div>
      </div>
  );
};

export default ItemDetail;
