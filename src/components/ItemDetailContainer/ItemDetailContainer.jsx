import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../../helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
    const [products, setProduct]=useState({});
    //const productId=1;
    const {idProducto}=useParams();
    console.log(idProducto);
     useEffect(() => {
        getProducts()
            .then((data) => {
                setProduct(data.find((item) => item.id === idProducto));
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
