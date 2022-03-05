import { useState } from "react"
import {Button, FormControl, InputGroup } from "react-bootstrap";

function ItemCount({initial,stock,onAdd}) {
    const [counter,setCounter]=useState(initial);
    const handleAdd=()=>{
       if(counter < stock){
            setCounter(counter +1)
       }   
    }
    const handleSubtract=()=>{
        if(counter>initial){
            setCounter(counter-1)
        }        
    }
    const add=()=>{
        onAdd(counter)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12  offset-md-3 col-md-6 ">
                        <InputGroup className="  mb-3 " >
                            <Button  variant="dark" onClick={handleSubtract} >-</Button >
                            <FormControl className="text-center" value={counter} />
                            <Button  variant="dark" onClick={handleAdd}>+</Button >
                        </InputGroup>
                        <Button variant="dark" onClick={stock !== 0 && add} >{stock !== 0 ? 'AGREGAR AL CARRITO' : 'SIN STOCK'} </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemCount
