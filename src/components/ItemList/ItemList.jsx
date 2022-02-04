import React from 'react';
import Item from '../Item/Item';
import { Row } from 'react-bootstrap';

const ItemList = ({listProducts}) => {
  return (
    <>  
        <Row xs={1} md={2} lg={3} className="g-4">
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
                Foto={el.foto}
            />
        ))}
      </Row>  
    </>
  );
};

export default ItemList;
