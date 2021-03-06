import React,{createContext} from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext';
export const ContextApp = createContext();
export const App = () => {
 
  return (
        <BrowserRouter>
          <CartContextProvider>
            <div className="App" >
              <NavBar />
              <Routes>
                <Route exact path='/' element={<ItemListContainer/>} />
                <Route exact path='/category/:IdCategory' element={<ItemListContainer/>} />
                <Route exact path='/detail/:IdProduct' element={<ItemDetailContainer/>} />
                <Route exact path='/cart' element={<Cart/>} />
              </Routes>
            </div>
          </CartContextProvider>  
        </BrowserRouter>
  )
}

 