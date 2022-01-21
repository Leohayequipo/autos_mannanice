import React from 'react'
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

export const App = () => {
  return (
    <div className="App" >
      <NavBar />
      <ItemListContainer/>
   </div>
  )
}

