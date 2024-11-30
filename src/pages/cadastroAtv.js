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
import FormularioAtv from '../components/formularioAtv';


const CadastroAtv = () => {
    return <div>
                <Container>
                    <Row>
                        <Logo></Logo>
                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-center'>
                        <div className='bg-white rounded mt-4 pt-3 mb-1 col-10'>
                            <h3 className='justify-content-center d-flex mb-4 font-weight-bold'>Insira as informações sobre sua PAE. Lembre-se de preencher todas as páginas</h3>
                            <div>
                                <FormularioAtv></FormularioAtv>
                            </div>
                            <div className='d-flex justify-content-center my-3'>
                                <Link to="">
                                    <Button className='btn-primary'>Enviar</Button>
                                </Link>
                            </div>
                        </div>

                    </Row>

                </Container>

            </div>
}

export default CadastroAtv;