import { getFirestore,collection, addDoc,doc, updateDoc, query, where, documentId, writeBatch, getDocs } from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext";
const Cart = () => {
const {cartList,vaciarCarrito,sumaTotal,borrarItem}=useCartContext();

const buy = async (e)=>{
    e.preventDefault();
    let purchaseOrder   = {}
    purchaseOrder.buyer = {name:'Leonardo Mannanice',email:'lic.mannanice@gmail.com',phone:'2257516706'}    
    purchaseOrder.total = sumaTotal()
    
    purchaseOrder.items = cartList.map(cartItem => {
      const id    = cartItem.item.id;
      const name  = cartItem.item.name;
      const price = cartItem.item.price;
      const cant  = cartItem.cantidad;
      return{
        id,
        name,
        price,
        cant
      }
    })
    //console.log(purchaseOrder)
   /*AGREGAR 
    const db = getFirestore()
    const ordersCollection = collection(db,'orders')
    
    await addDoc(ordersCollection,purchaseOrder)
    .then(resp => console.log(resp))*/
   
   /* update
    const db = getFirestore()
    const queryDoc = doc(db,'items','6MNjjjohyDOd1WeJlvFZ')
    updateDoc(queryDoc,{
      stock : 10
    })
    .then(resp=> console.log(resp))
     */
    const db = getFirestore()
    const queryCollection = collection(db,'items')
    const queryUpdateStock = query(
      queryCollection,
      where (documentId(),'in',cartList.map(it => it.item.id))
    )
    const batch = writeBatch(db)
     
    await getDocs(queryUpdateStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
          stock :res.data().stock - cartList.find(item=>item.item.id === res.id).cantidad
          })
    ))
    .catch(err => console.log(err))
    .finally(() =>alert('Orden generado con existo'), vaciarCarrito())
    batch.commit()




}
  return <div>
          {cartList.length !== 0 ?
            <>
              {cartList.map(produc=>
                        <div>
                          <li>{produc.item.name} ${produc.item.price}</li>
                          <li>Cantidad: {produc.cantidad} </li>borrarItem
                          <button onClick={() => borrarItem(produc.item.id)}>Borrar Item</button>
                        </div> )}
              {<button onClick={buy}>Crear orden</button>}              
              
              {`suma ${sumaTotal()}`}
              {<button onClick={vaciarCarrito}>Limpiar</button>}              
            </>              
          :
            <label>
              Sigo vacio (:
            </label>
          }
        </div>;
};

export default Cart;
