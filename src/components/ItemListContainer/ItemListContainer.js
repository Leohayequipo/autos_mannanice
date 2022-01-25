import ItemCount from '../itemCount/itemCount.js'
import { useState,useEffect } from "react"
import getProducts from '../../helpers/getProducts.js';
import ItemList from '../ItemList/ItemList.jsx';
function onAdd(cant){
    console.log(cant);
}
export const ItemListContainer = ({greetings,valor1}) => {
    const [listProducts,setListProducts] = useState([]);
    const categoryId="Autos";
   useEffect(()=>{
       getProducts()
        .then((data) =>
        setListProducts(
            categoryId ? data.filter((el)=>el.category === categoryId):data
        )
       )
        .catch((err)=>console.log(err));
   },[]);

   return (
        <div> 
            <ItemList listProducts={listProducts}/>
            <ItemCount initial={1} stock={6} onAdd={onAdd} />
        </div>
    )
}


