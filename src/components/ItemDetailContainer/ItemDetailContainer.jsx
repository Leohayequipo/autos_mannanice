import React,{useEffect,useState} from 'react';
import {  Spinner } from 'react-bootstrap';
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
                <Spinner animation="border" variant="dark" />
            :
             <ItemDetail products={products}/>
            }
        </>
    );
};
export default ItemDetailContainer;
