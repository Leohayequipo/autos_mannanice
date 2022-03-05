
import { Badge, Button, Card, ListGroup } from "react-bootstrap";
import { useCartContext } from "../../Context/CartContext";
import ComponentForm from "../ComponentForm/componentForm";
import Image from 'react-bootstrap/Image'
import { CartEmpty } from "../CartEmpty/CartEmpty";
const Cart = () => {
  const {cartList,vaciarCarrito,sumaTotal,borrarItem}=useCartContext();
 
  return <div>
          <div className="container">
            <div className="row">
              {cartList.length !== 0 ?
                <>
                  <div className="col-12 mb-2">
                      <Card>
                        <Card.Header>DETALLE FINAL</Card.Header>
                        <Card.Body>
                         <div className="container">
                           <div className="row">
                             <div className="col-4">
                              
                             </div>
                             <div className="col-8">
                                <Card >
                                  <ListGroup variant="flush">
                                    <ListGroup.Item>
                                      USTED DEBE ABONAR:  <h3>${sumaTotal()}</h3> PESO ARGENTINOS
                                   </ListGroup.Item>
                                   <ListGroup.Item>
                                      CANCELAR TODO
                                      {<Button variant="warning" onClick={vaciarCarrito}>LIMPIAR</Button>}
                                   </ListGroup.Item>
                                  </ListGroup>
                                </Card>
                              </div>
                           </div>
                         </div>
                        </Card.Body>
                      </Card>
                    </div>
                  {cartList.map(produc=>
                    <div className="col-12 mb-2">
                      <Card>
                        <Card.Header>{produc.item.category}</Card.Header>
                        <Card.Body>
                         <div className="container">
                           <div className="row">
                             <div className="col-4">
                              <Image width="90%"  src={produc.item.image}  roundedCircle />
                             </div>
                             <div className="col-8">
                                <Card >
                                  <ListGroup variant="flush">
                                    <ListGroup.Item>
                                      {produc.item.name} AÑO {produc.item.year}, {produc.item.km} KMs.</ListGroup.Item>
                                    <ListGroup.Item>CANTIDAD SOLICITADAS: <h5>{produc.cantidad} DE ({produc.item.stock} disponibles)</h5> </ListGroup.Item>
                                    <ListGroup.Item>TOTAL <h3>$ {produc.cantidad * produc.item.price } </h3> </ListGroup.Item>
                                    <ListGroup.Item><Badge className="btn" pill bg="danger" onClick={() => borrarItem(produc.item.id)} >ELIMINAR</Badge></ListGroup.Item>
                                  </ListGroup>
                                </Card>
                              </div>
                           </div>
                         </div>
                        </Card.Body>
                      </Card>
                    </div>)}
                  <ComponentForm />
                </>              
              :
                <CartEmpty/>
              }
            </div>
          </div>
        </div>;
};

export default Cart;
