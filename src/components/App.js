import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './Logo'
import './styles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formulario from './formulario';



const App = () => {
    return <div>
                <Container>
                    <Row>
                        <Logo></Logo>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <div className='col-12 bg-white rounded mt-4 pt-2 mb-1'>
                            <p className='justify-content-center d-flex'>Bem vindo(a) ao sistema de cadastro das atividades PAE. Preencha seus dados para começar</p>
                        </div>
                        
                    </Row>
                </Container>
                <Container className='bg-white rounded'>
                    <Formulario>

                    </Formulario>
                </Container>
            </div>
}

export default App;