/*import ima from "./Imagenes/carrito.png"*/
import { Badge } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import { useCartContext } from "../../Context/CartContext";

const Cartwidget = () => {
    const {cantidad}=useCartContext();
    return (
        <div className="">
            <Badge pill bg="danger">
            {cantidad()!== 0 && cantidad()}
            </Badge>
            {/*<img src={ima} alt="Carrito" className="w-25"/> */}
            <BsCart3 size={25}/>
        </div>
    )
}

export default Cartwidget
