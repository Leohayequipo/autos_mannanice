import ItemCount from '../itemCount/itemCount.js'
import { useState,useEffect } from "react"
import getProducts from '../../helpers/getProducts.js';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
function onAdd(cant){
    console.log(cant);
}
export const ItemListContainer = ({greetings,valor1}) => {
    const [listProducts,setListProducts] = useState([]);
    const [loading,setloading]=useState(true);
    const {idCategoria} =useParams();
    
   useEffect(()=>{
      console.log(idCategoria)
       getProducts()
        .then((data) =>
        setListProducts(
            idCategoria ? data.filter((el)=>el.category === idCategoria):data
        )
        )
        .catch((err)=>console.log(err))
        .finally(()=>setloading(false));
   },[idCategoria]);

   return (
        <div>
            {loading?<h2>Cargando..</h2>:
            <>
                <ItemList listProducts={listProducts}/>
                <ItemCount initial={1} stock={6} onAdd={onAdd} />
            </>
            } 
            
            
        </div>
    )
}


