import React from 'react'
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

export const App = () => {
  return (
    <div className="App" >
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer/>
   </div>
  )
}

