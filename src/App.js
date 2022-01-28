import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';


export const App = () => {
  return (
        <BrowserRouter>
          <div className="App" >
            <NavBar />
            <Routes>
              <Route exact path='/' element={<ItemListContainer/>} />
              <Route exact path='/categoria/:idCategoria' element={<ItemListContainer/>} />

              <Route exact path='/detalle/:idProducto' element={<ItemDetailContainer/>} />
              <Route exact path='/cart' element={<Cart/>} />
             </Routes>
            
          </div>
        </BrowserRouter>
      
    
  )
}

 