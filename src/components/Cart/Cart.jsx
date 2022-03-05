
import { Badge, Button, Card, ListGroup,Image } from "react-bootstrap";
import { useCartContext } from "../../Context/CartContext";
import ComponentForm from "../ComponentForm/componentForm";
import { CartEmpty } from "../CartEmpty/CartEmpty";
const Cart = () => {
  const {cartList,emptyCart,totalAmount,deleteItem}=useCartContext();
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
                             <div className="offset-4 col-8">
                                <Card >
                                  <ListGroup variant="flush">
                                    <ListGroup.Item>
                                      USTED DEBE ABONAR: <h3>${totalAmount()}</h3> PESO ARGENTINOS
                                   </ListGroup.Item>
                                   <ListGroup.Item>
                                      CANCELAR TODO
                                      {<Button variant="warning" onClick={emptyCart}>LIMPIAR</Button>}
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
                                    <ListGroup.Item>CANTIDAD SOLICITADAS: <h5>{produc.cant} DE ({produc.item.stock} disponibles)</h5> </ListGroup.Item>
                                    <ListGroup.Item>TOTAL <h3>$ {produc.cant * produc.item.price } </h3> </ListGroup.Item>
                                    <ListGroup.Item><Badge className="btn" pill bg="danger" onClick={() => deleteItem(produc.item.id)} >ELIMINAR</Badge></ListGroup.Item>
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
