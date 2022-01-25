import React,{useEffect,useState} from 'react';
import getProducts from '../../helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
    const [products, setProduct]=useState({});
    const productId=1;
     useEffect(() => {
        getProducts()
            .then((data) => {
                setProduct(data.find((item) => item.id === productId));
            })
            .catch((err) => console.log(err));
  }, []);
  
  return (
      <>
       <ItemDetail products={products}/>
      </>
  );
};
export default ItemDetailContainer;
