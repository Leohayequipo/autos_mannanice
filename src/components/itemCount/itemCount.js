import { useState } from "react"
import {Button, FormControl, InputGroup } from "react-bootstrap";

function ItemCount({initial,stock,onAdd}) {
    const [contador,setcontador]=useState(initial);
    const handleAumentar=()=>{
       if(contador < stock){
            setcontador(contador +1)
       }   
    }
    const handleRestar=()=>{
        if(contador>initial){
            setcontador(contador-1)
        }        
    }
    const agregar=()=>{
        onAdd(contador)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12  offset-md-3 col-md-6 ">
                        <InputGroup className="  mb-3 " >
                            <Button  variant="dark" onClick={handleRestar} >-</Button >
                            <FormControl className="text-center" value={contador} />
                            <Button  variant="dark" onClick={handleAumentar}>+</Button >
                        </InputGroup>
                        <Button variant="dark" onClick={stock !== 0 && agregar} >{stock !== 0 ? 'AGREGAR AL CARRITO' : 'SIN STOCK'} </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemCount
