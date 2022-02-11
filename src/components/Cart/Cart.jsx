import { useCartContext } from "../../Context/CartContext";

const Cart = () => {
  const {cartList,vaciarCarrito,sumaTotal,borrarItem}=useCartContext();
  console.log(cartList)
  return <div>
          {cartList.length !== 0 ?
            <>
              {cartList.map(produc=>
                        <div>
                          <li>{produc.item.name} ${produc.item.price}</li>
                          <li>Cantidad: {produc.cantidad} </li>borrarItem
                          <button onClick={() => borrarItem(produc.item.id)}>Borrar Item</button>
                        </div> )}
              {`suma ${sumaTotal()}`}              
            </>              
          :
          <label>
            Sigo vacio (:
          </label>
          
          }
          
            <button onClick={vaciarCarrito}>Limpiar</button>
          </div>;
};

export default Cart;
