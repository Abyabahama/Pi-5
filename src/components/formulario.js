import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = () => {
    return (
            <div>
                <Tabs defaultActiveKey="Pessoal" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Pessoal" title="Pessoal">
                        Sobre você
                    </Tab>
                    <Tab eventKey="Profissional" title="Profissional">
                        Tab content for Profile
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        Tab content for Contact
                    </Tab>
                </Tabs>
            </div>
    )
}

export default Formulario;