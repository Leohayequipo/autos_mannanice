import React from 'react';
import Item from '../Item/Item';
import { Row } from 'react-bootstrap';

const ItemList = ({listProducts}) => {
  return (
    <>  
        <Row xs={2} md={3} lg={4} className="g-4">
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
