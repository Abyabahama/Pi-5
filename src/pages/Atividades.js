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


const Servico = () => {
    return <div>
                <Container>
                    <Row>
                        <Logo></Logo>
                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-center'>
                        <div className='bg-white rounded mt-4 pt-3 mb-1 col-10'>
                            <h3 className='justify-content-center d-flex mb-4 font-weight-bold'>Selecione qual serviço deseja acessar.</h3>
                            <div>
                                <Link to="/atividades/cadastro" className='text-decoration-none'>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <Button className='col-12 col-md-8 col-lg-5 font-weight-bold'>Cadastrar uma nova atividade</Button>
                                    </div>
                                </Link>
                                <Link to="/atividades/consulta" className='text-decoration-none'>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <Button className='col-12 col-md-8 col-lg-5 font-weight-bold'>Consultar status de atividade</Button>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </Row>

                </Container>

            </div>
}

export default Servico;
