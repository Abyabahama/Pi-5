import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormularioRPA = () => {
    return (
            <div>
                <Tabs defaultActiveKey="Pessoal" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Pessoal" title="Pessoal">
                        <Form>
                        <Form.Group className='mb-1' controlId='nome.ControlInput'>
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control type='name'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='email.ControlInput'>
                            <Form.Label>Endereço de E-mail</Form.Label>
                            <Form.Control type='email'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='rg.ControlInput'>
                            <Form.Label>Número de R.G.</Form.Label>
                            <Form.Control type='rg'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='cpf.ControlInput'>
                            <Form.Label>Número de CPF</Form.Label>
                            <Form.Control type='cpf'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='nacionalidade.ControlInput'>
                            <Form.Label>Nacionalidade</Form.Label>
                            <Form.Control type='nacionalidade'></Form.Control>
                        <Form.Group className='mb-1' controlId='unifed.ControlInput'>
                            <Form.Label>Unidade Federativa</Form.Label>
                            <Form.Control type='unifed'></Form.Control>
                        </Form.Group>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='cidade.ControlInput'>
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type='cidade'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='logradouro.ControlInput'>
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control type='logradouro'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='numero.ControlInput'>
                            <Form.Label>Número de Endereço</Form.Label>
                            <Form.Control type='numero'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='complemento.ControlInput'>
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control type='complemento'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='bairro.ControlInput'>
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type='bairro'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='telefone.ControlInput'>
                            <Form.Label>Telefone para Contato</Form.Label>
                            <Form.Control type='telefone'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='estcivil.ControlInput'>
                            <Form.Label>Estado Civil</Form.Label>
                            <Form.Control type='estcivil'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='profissao.ControlInput'>
                            <Form.Label>Profissão Atual</Form.Label>
                            <Form.Control type='profissao'></Form.Control>
                        </Form.Group>

                        </Form>    
                    </Tab>
                    <Tab eventKey="Profissional" title="Profissional">
                        <Form.Group className='mb-1' controlId='curriculo.ControlInput'>
                            <Form.Label>Curriculo</Form.Label>
                            <Form.Control as="textarea" rows="4" type='curriculo'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='url.ControlInput'>
                            <Form.Label>URL ou Site</Form.Label>
                            <Form.Control type='url'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='lattes.ControlInput'>
                            <Form.Label>Lattes</Form.Label>
                            <Form.Control type='lattes'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='portfolio.ControlInput'>
                            <Form.Label>Portfólio</Form.Label>
                            <Form.Control type='portfolio'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='linkedin.ControlInput'>
                            <Form.Label>Linkedin</Form.Label>
                            <Form.Control type='linkedin'></Form.Control>
                        </Form.Group>
                    </Tab>
                </Tabs>
            </div>
    )
}

export default FormularioRPA;