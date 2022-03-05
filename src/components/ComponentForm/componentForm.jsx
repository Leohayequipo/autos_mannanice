import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { getFirestore,collection, addDoc,doc, updateDoc, query, where, documentId, writeBatch, getDocs } from "firebase/firestore";
import { useCartContext } from '../../Context/CartContext';
const ComponentForm = () => {
    const [EmailEstate, setEmailEstate] = useState({State:false,Info:'',style:'light'})
    const {cartList,vaciarCarrito,sumaTotal}=useCartContext();
    const buy = async (e)=>{
        e.preventDefault();
        let purchaseOrder   = {}
        purchaseOrder.buyer = dataForm    
        purchaseOrder.total = sumaTotal()
        purchaseOrder.items = cartList.map(cartItem => {
            const id    = cartItem.item.id;
            const name  = cartItem.item.name;
            const price = cartItem.item.price;
            const cant  = cartItem.cantidad;
            return{
                id,
                name,
                price,
                cant
            }
        })
       
        const db = getFirestore()
        const ordersCollection = collection (db, 'orders')
       
        await addDoc( ordersCollection, purchaseOrder)
        .then(resp =>alert(`Orden Generada con Exito. ID: ${resp.id}` ))

        const queryCollection = collection(db,'items')
        const queryUpdateStock = query(
          queryCollection,
          where (documentId(),'in',cartList.map(it => it.item.id))
        )
        const batch = writeBatch(db)
       
        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
              stock:res.data().stock - cartList.find(item=>item.item.id === res.id).cantidad
              })
        ))
        .catch(err => console.log(err))
        .finally(() =>
            vaciarCarrito())
        batch.commit()
  }
    const[dataForm , setDataForm] = useState({
        name   : '',
        dni    : '',
        email  : '',
        email2 : '',
        phone  : ''

    })
    const handleChange = (event)=>{
        setDataForm({
            ...dataForm,
            [event.target.name]:event.target.value
        })
        console.log(dataForm);
    }
    async function DuplicatedEmail(event){
        event.preventDefault()
       
        if(event.target.value === dataForm.email){       
            setEmailEstate({State:true,Info:'Correcto',style:'success'})
        }else{         
            setEmailEstate({State:false,Info:'Los emails no coinciden!',style:'warning'})
        }
    }

  return (
     <Form className="offset-2 w-75 mb-4" onSubmit={buy}>
        <h3>DATOS DEL COMPRADOR</h3>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>NOMBRE</Form.Label>
            <Form.Control 
                type="text" 
                name="name" 
                placeholder="Su nombre" 
                onChange={handleChange} 
                value={dataForm.name}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDni">
            <Form.Label>DNI</Form.Label>
            <Form.Control 
                type="number" 
                name="dni" 
                placeholder="DNI" 
                onChange={handleChange} 
                value={dataForm.dni}/>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control 
                type="email" 
                name="email" 
                placeholder="example@email.com" 
                onChange={handleChange} 
                value={dataForm.email}/>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formEmail2">
            <Form.Label>RE-EMAIL</Form.Label>
            <Form.Control 
                type="email" 
                name="email2" 
                placeholder="Re-email" 
                onChange={DuplicatedEmail}
                />
        </Form.Group>
        <Alert className='small mt-1'  variant={EmailEstate.style}>
                     {EmailEstate.Info}
        </Alert> 
        <Form.Group className="mb-3" controlId="formDni">
            <Form.Label>TELEFONO</Form.Label>
            <Form.Control 
                type="number" 
                name="phone" 
                placeholder="Celular" 
                onChange={handleChange} 
                value={dataForm.phone}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            FINALIZAR COMPRA
        </Button>
    </Form>
  )
}

export default ComponentForm