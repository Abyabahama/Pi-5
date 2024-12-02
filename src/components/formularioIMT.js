import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormularioIMT = () => {
    const [email, setEmail] = useState('')
    const [rg, setRG] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const dados = {
            "email": email,
            "RG": rg
        }
        console.log(dados)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-1' controlId='login.ControlInput'>
                    <Form.Label>Endereço de E-mail</Form.Label>
                    <Form.Control type='text' name="email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='senha.ControlInput'>
                    <Form.Label>R.G</Form.Label>
                    <Form.Control type='text' name="rg" value={rg} onChange={(e) => {setRG(e.target.value)}}></Form.Control>
                </Form.Group>
                <div className='d-flex justify-content-center mb-3'>
                    <Button className='btn-primary' type="submit">Enviar</Button>
                </div>
            </Form>
        </div>
    )
}

export default FormularioIMT;