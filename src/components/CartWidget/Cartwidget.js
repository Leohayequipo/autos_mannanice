import { Badge } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import { useCartContext } from "../../Context/CartContext";
const Cartwidget = () => {
    const {ItemCant}=useCartContext();
    return (
        <div className="">
            <Badge pill bg="danger">
                {ItemCant()!== 0 && ItemCant()}
            </Badge>
            <BsCart3 size={25}/>
        </div>
    )
}
export default Cartwidget
