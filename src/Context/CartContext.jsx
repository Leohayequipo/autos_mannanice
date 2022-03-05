import React, { useState,useContext,createContext } from 'react';
const cartContext = createContext([]);

export function useCartContext(){
  return useContext(cartContext);
}

function CartContextProvider({children}) {
  const [cartList, setCartList] = useState([]);
      function addToCart(item){
          //findIndex -1 no existe - >0 existe 
          const index = cartList.findIndex(prod=> prod.item.id === item.item.id)
          if( index===-1){
            setCartList([...cartList,item])
          }else{
            const cant = cartList[index].cant
            cartList[index].cant=item.cant + cant;
            const newCartList = [...cartList]
            setCartList(newCartList);
          }
      }  
      const totalAmount  = ()=>{
        return cartList.reduce((acu,prod)=>acu+=(prod.item.price*prod.cant),0)
      }
      const ItemCant   = ()=>{
        return cartList.reduce((acu,prod)=>acu+=prod.cant,0)

      }
      const deleteItem = (id)=>{
        setCartList(cartList.filter(prod=>prod.item.id !== id))
      }

      function emptyCart(){
        setCartList([]);
      }
    return <cartContext.Provider value={{
          cartList,
          addToCart,
          emptyCart,
          totalAmount,
          ItemCant,
          deleteItem
        

    }}>
          {children}
          </cartContext.Provider>;
}

export default CartContextProvider;
