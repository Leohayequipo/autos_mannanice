import { useState,useEffect } from "react"
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { Spinner } from "react-bootstrap";
import {getFirestore,getDocs,collection,query,where} from "firebase/firestore"

export const ItemListContainer = () => {
    const [listProducts,setListProducts] = useState([]);
    const [loading,setloading] = useState(true);
    const {IdCategory} = useParams();
    
    useEffect(()=>{
        const db = getFirestore();
        const queryCollection = collection(db,'items')
        const queryFiltro = query(queryCollection,where('category',IdCategory ? '==' : '!=', IdCategory ? IdCategory : ''))
        getDocs(queryFiltro)
        .then(resp => setListProducts(resp.docs.map(prod => ({id:prod.id, ...prod.data()}) )))
        .catch((err)=> console.log())
        .finally(()=>setloading(false))
    },[IdCategory]);

    return (
        <div>
            { loading ?
                <Spinner animation="border" variant="dark" />
            :
                <>
                    <ItemList listProducts={listProducts}/>
                </>
            } 
        </div>
    )
}


