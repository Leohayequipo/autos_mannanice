
import { useCartContext } from "../../Context/CartContext";
import ComponentForm from "../ComponentForm/componentForm";
const Cart = () => {
  const {cartList,vaciarCarrito,sumaTotal,borrarItem}=useCartContext();
 
  return <div>
          {cartList.length !== 0 ?
            <>
              {cartList.map(produc=>
                        <div>
                          <li>{produc.item.name} ${produc.item.price}</li>
                          <li>Cantidad: {produc.cantidad} </li>borrarItem
                          <button onClick={() => borrarItem(produc.item.id)}>Borrar Item</button>
                        </div> )}
           
              <ComponentForm />
              {/*<button onClick={buy}>Crear orden</button>*/}              
              
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
