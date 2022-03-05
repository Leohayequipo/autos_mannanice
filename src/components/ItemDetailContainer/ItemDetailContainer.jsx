import {useEffect,useState} from 'react';
import {Spinner} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore,doc,getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [products, setProduct]=useState({});
    const {IdProduct}=useParams();
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
            const db = getFirestore();
            const itemRef= doc(db,'items',IdProduct)
            getDoc(itemRef)
            .then(resp=>setProduct({id:resp.id, ...resp.data()}))
            .catch((err) => console.log(err))
            .finally(()=>setLoading(false))
        },[IdProduct]);
  
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
