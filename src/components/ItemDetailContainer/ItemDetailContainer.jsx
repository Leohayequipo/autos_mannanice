import React,{useEffect,useState} from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore,doc,getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {
const [products, setProduct]=useState({});
const {idProducto}=useParams();
const [loading,setLoading]= useState(true);

useEffect(()=>{
        const db = getFirestore();
        const itemRef= doc(db,'items',idProducto)
        getDoc(itemRef)
        .then(resp=>setProduct({id:resp.id, ...resp.data()}))
        .catch((err) => console.log(err))
        .finally(()=>setLoading(false))
    },[idProducto]);
  
    return (
        <>
            {loading ? 
               <ProgressBar animated now={45} />
            :
             <ItemDetail products={products}/>
            }
        </>
    );
};
export default ItemDetailContainer;
