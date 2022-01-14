import logo from './logo.svg';
import './App.css';
import ComnponenteContendor from './components/ComnponenteContenedor';

import React from 'react'
import Titulo from './components/Titulo';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

//esto tambien es un componente - que no lo importo porque esta dentro del mismo modulo

/*function Titulo(){
  return(
    <div>
      soy el componente titulo
    </div>
  )
}*/


export const App = () => {
  return (
    
    <div className="App"   onClick={()=>console.log('zzzzzzzzzzz')} >
    
      <NavBar/>
    
   </div>
  )
}

//export default App

/*function App() {
  const estilo = {backgroundColor:'blue'}
  return (
  
   // <ComnponenteContendor />
     
    
    <div className="App"  style={estilo} onClick={()=>console.log('zzzzzzzzzzz')} >
     <p>leo</p>
     <input />
    </div>
  );
}

export default App;*/
