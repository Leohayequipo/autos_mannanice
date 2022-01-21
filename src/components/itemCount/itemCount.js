import { useState } from "react"

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
        <div className="container w-50">
            <button className="btn btn-outline-primary mb-2 mt-4" onClick={handleAumentar} >+</button>
                {contador}
            <button className="btn btn-outline-primary mb-2 mt-4 " onClick={handleRestar}>-</button><br/>
            <button className="btn btn-outline-primary" onClick={agregar} >Agregar al carrito</button><br/>
        </div>
    )
}
export default ItemCount
