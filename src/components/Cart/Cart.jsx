import { useCartContext } from "../../Context/CartContext";

const Cart = () => {
  const {cartList,vaciarCarrito}=useCartContext();
  return <div>
          {
            cartList.map(produc=>
                        <div>
                          <li>{produc.name} ${produc.price}</li>
                          <li>Cantidad: ${produc.cantidad} </li>
                        </div> )
          }
          <button onClick={vaciarCarrito}>Limpiar</button>
          </div>;
};

export default Cart;
