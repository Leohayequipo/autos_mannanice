import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const ComponentForm = () => {
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
    const buy1 =async(e)=>{
        e.preventDefault()

    }
  return (
     <Form onSubmit={buy1}>
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
                onChange={handleChange} 
                value={dataForm.email2}/>
        </Form.Group>
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
        Submit
        </Button>
    </Form>
  )
}

export default ComponentForm