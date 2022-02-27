import React, { useState,useContext } from 'react';
import { createContext} from "react";

 const cartContext = createContext([]);
 export function useCartContext(){
     return useContext(cartContext);
 }


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);
    
    function agregarAlCarrito(item){
        //findIndex -1 no existe - >0 existe 
        const index = cartList.findIndex(prod=> prod.item.id === item.item.id)
        //console.log(item)
        if( index===-1){
          setCartList([...cartList,item])
        }else{
          const cant = cartList[index].cantidad
          cartList[index].cantidad=item.cantidad + cant;
          const newCartList = [...cartList]
          setCartList(newCartList);
        }
    }  
    const sumaTotal  = ()=>{
      return cartList.reduce((acu,prod)=>acu+=(prod.item.price*prod.cantidad),0)
    }
    const cantidad   = ()=>{
      return cartList.reduce((acu,prod)=>acu+=prod.cantidad,0)

    }
    const borrarItem = (id)=>{
      setCartList(cartList.filter(prod=>prod.item.id !== id))
    }

    function vaciarCarrito(){
      setCartList([]);
    }

    return <cartContext.Provider value={{
          cartList,
          agregarAlCarrito,
          vaciarCarrito,
          sumaTotal,
          cantidad,
          borrarItem   

    }}>
              {children}
          </cartContext.Provider>;
}

export default CartContextProvider;
