import { Button, Card } from 'react-bootstrap'
import noDuermas from './Images/noDuermas.jpg'
import { BsFillAlarmFill,BsFillEmojiWinkFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
export const CartEmpty = () => {
  return (
     <> 
        <h2 className="mt-4">CARRITO VACÍO <BsFillEmojiWinkFill/> </h2>
        <Card className="offset-3 col-6 mt-4" >
            <Card.Img variant="top" src={noDuermas} />
            <Card.Body>
                <Card.Title>  NO TE DUERMAS! <h3><BsFillAlarmFill/></h3> SEGUÍ BUSCANDO TU AUTO IDEAL! </Card.Title>
                <Card.Text>
                    (CLICK PARA ENCONTRARLO)
                </Card.Text>
                <Link to='/'>
                    <Button variant="primary">IR A COMPRAR</Button>
                </Link>  
            </Card.Body>
        </Card>
    </>
  )
}
