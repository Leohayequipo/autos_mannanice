import React from 'react';
const Item = ({Id,Name,Stock,Price,Category,Km,Year}) => {
  return (
      <>
        <h3>Tipo: {Category}</h3>
        <h4>-#{Id} Vehiculo: {Name} -  </h4>
        <h4><b>Modelo: {Year} {Km} KM</b></h4>
        <h4>${Price}</h4>
        <h4>Disponibles:{Stock}</h4>
        
      </>
  );
};

export default Item;
