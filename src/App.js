import logo from './logo.svg';
import './App.css';
import ComnponenteContendor from './components/ComnponenteContenedor';

import React from 'react'


import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/itemListContainer';



export const App = () => {
 
  return (
    
    <div className="App"   onClick={()=>console.log('hola soy mensaje')} >
    
    <NavBar />
    <ItemListContainer greetings="Soy una props HOLA. Greeting es saludo" />


     



   </div>
  )
}

