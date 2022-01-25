import React from 'react';
import Item from '../Item/Item';

const ItemList = ({listProducts}) => {
  return (
    <>
        {listProducts.map((el)=>(
            <Item 
                key={el.id} 
                Name={el.name}
                Price={el.price}  
                Stock={el.stock} 
                Year={el.year}
                Km = {el.km}
                Category={el.category}
                Id={el.id}

            />
        ))}
    </>
  );
};

export default ItemList;
