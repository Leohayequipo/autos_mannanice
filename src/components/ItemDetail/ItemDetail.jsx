import React from 'react';
const ItemDetail = ({products}) => {
  return (
      <>
        <h1>La categoria:{products.category}</h1>
        <h4>Nombre:{products.name}</h4>
        <h4>${products.price}</h4>
       


      </>
  );
};

export default ItemDetail;
