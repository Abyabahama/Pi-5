import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../components/Logo'
import '../components/styles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const CadastroIMT = () => {
    return <div>
                <Container>
                    <Row>
                        <Logo></Logo>
                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-center'>
                        <div className='bg-white rounded mt-4 pt-3 mb-1 col-10'>
                            <h3 className='justify-content-center d-flex mb-4 font-weight-bold'>Insira seu e-mail de contato e número de R.G</h3>
                            <div>
                            <Form>
                                <Form.Group className='mb-1' controlId='login.ControlInput'>
                                    <Form.Label>Endereço de E-mail</Form.Label>
                                    <Form.Control type='email'></Form.Control>
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='senha.ControlInput'>
                                    <Form.Label>R.G</Form.Label>
                                    <Form.Control type='rg'></Form.Control>
                                </Form.Group>
                            </Form>

                            </div>
                            <div className='d-flex justify-content-center mb-3'>
                                <Link to="">
                                    <Button className='btn-primary'>Enviar</Button>
                                </Link>
                            </div>
                        </div>

                    </Row>

                </Container>

            </div>
}

export default CadastroIMT;