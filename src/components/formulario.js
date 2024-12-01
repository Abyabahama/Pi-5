import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Formulario = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [rg, setRG] = useState('')
    const [cpf, setCPF] = useState('')
    const [nacionalidade, setNacionalidade] = useState('')
    const [uf, setUF] = useState('')
    const [cidade, setCidade] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [telefone, setTelefone] = useState('')
    const [estCivil, setEstCivil] = useState('')
    const [profissao, setProfissao] = useState('')
    const [curriculo, setCurriculo] = useState('')
    const [url, setURL] = useState('')
    const [lattes, setLattes] = useState('')
    const [portfolio, setPortfolio] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [cnpj, setCNPJ] = useState('')
    const [cnae, setCNAE] = useState('')
    const [nomeResp, setNomeResp] = useState('')
    const [emailResp, setEmailResp] = useState('')
    const [cpfResp, setCpfResp] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        const dados = {
            "nome": nome,
            "email": email,
            "RG": rg,
            "CPF": cpf,
            "nacionalidade": nacionalidade,
            "unidade federativa": uf,
            "cidade": cidade,
            "logradouro" : logradouro,
            "endereço": endereco,
            "complemento": complemento,
            "bairro": bairro,
            "telefone": telefone,
            "estado civil": estCivil,
            "profissâo": profissao,
            "curriculo": curriculo,
            "url": url,
            "lattes": lattes,
            "portfolio": portfolio,
            "linkedin": linkedin,
            "empresa": empresa,
            "cnpj da empresa": cnpj,
            "cnae da empresa": cnae,
            "nome do responsavel pelo contrato": nomeResp,
            "email do responsavel pelo contrato": emailResp,
            "cpf do responsavel pelo contrato": cpfResp
        }
        console.log(dados)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Tabs defaultActiveKey="Pessoal" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Pessoal" title="Pessoal">
                        <Form.Group className='mb-1' controlId='nome.ControlInput'>
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control type='text' name="nome" value={nome} onChange={(e) => setNome(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='email.ControlInput'>
                            <Form.Label>Endereço de E-mail</Form.Label>
                            <Form.Control type='text' name="email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='rg.ControlInput'>
                            <Form.Label>Número de R.G.</Form.Label>
                            <Form.Control type='text' name="rg" value={rg} onChange={(e) => setRG(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='cpf.ControlInput'>
                            <Form.Label>Número de CPF</Form.Label>
                            <Form.Control type='text' name="cpf" value={cpf} onChange={(e) => setCPF(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='nacionalidade.ControlInput'>
                            <Form.Label>Nacionalidade</Form.Label>
                            <Form.Control type='text' name="nacionalidade" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='unifed.ControlInput'>
                            <Form.Label>Unidade Federativa</Form.Label>
                            <Form.Control type='text' name="uf" value={uf} onChange={(e) => setUF(e.target.value)}></Form.Control>
                        </Form.Group>
                        
                        <Form.Group className='mb-1' controlId='cidade.ControlInput'>
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type='text' name="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='logradouro.ControlInput'>
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control type='text' name="logradouro" value={logradouro} onChange={(e) => setLogradouro(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='numero.ControlInput'>
                            <Form.Label>Número de Endereço</Form.Label>
                            <Form.Control type='text' name="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='complemento.ControlInput'>
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control type='text' name="complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='bairro.ControlInput'>
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type='text' name="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='telefone.ControlInput'>
                            <Form.Label>Telefone para Contato</Form.Label>
                            <Form.Control type='text' name="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='estcivil.ControlInput'>
                            <Form.Label>Estado Civil</Form.Label>
                            <Form.Control type='text' name="estCivil" value={estCivil} onChange={(e) => setEstCivil(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='profissao.ControlInput'>
                            <Form.Label>Profissão Atual</Form.Label>
                            <Form.Control type='text' name="profissao" value={profissao} onChange={(e) => setProfissao(e.target.value)}></Form.Control>
                        </Form.Group>

                    </Tab>
                    <Tab eventKey="Profissional" title="Profissional">
                        <Form.Group className='mb-1' controlId='curriculo.ControlInput'>
                            <Form.Label>Curriculo</Form.Label>
                            <Form.Control as="textarea" rows="4" type='text' name="curriculo" value={curriculo} onChange={(e) => setCurriculo(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='url.ControlInput'>
                            <Form.Label>URL ou Site</Form.Label>
                            <Form.Control type='text' name="url" value={url} onChange={(e) => setURL(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='lattes.ControlInput'>
                            <Form.Label>Lattes</Form.Label>
                            <Form.Control type='text' name="lattes" value={lattes} onChange={(e) => setLattes(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='portfolio.ControlInput'>
                            <Form.Label>Portfólio</Form.Label>
                            <Form.Control type='text' name="portfolio" value={portfolio} onChange={(e) => setPortfolio(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='linkedin.ControlInput'>
                            <Form.Label>Linkedin</Form.Label>
                            <Form.Control type='text' name="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Tab>
                    <Tab eventKey="Empresarial" title="Empresarial">
                        <Form.Group className='mb-1' controlId='nomeEmp.ControlInput'>
                            <Form.Label>Nome da Empresa</Form.Label>
                            <Form.Control type='text' name="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='cnpj.ControlInput'>
                            <Form.Label>CNPJ da Empresa</Form.Label>
                            <Form.Control type='text' name="cnpj" value={cnpj} onChange={(e) => setCNPJ(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='cnae.ControlInput'>
                            <Form.Label>CNAE da empresa ligado à educação</Form.Label>
                            <Form.Control type='text' name="cnae" value={cnae} onChange={(e) => setCNAE(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='nomeCont.ControlInput'>
                            <Form.Label>Nome completo do responsável pela assinatura do contrato de
                                prestação de serviços</Form.Label>
                            <Form.Control type='text' name="nomeResp" value={nomeResp} onChange={(e) => setNomeResp(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='emailCont.ControlInput'>
                            <Form.Label>E-mail do responsável pela assinatura do contrato de prestação de serviços</Form.Label>
                            <Form.Control type='text' name="emailResp" value={emailResp} onChange={(e) => setEmailResp(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='cpfCont.ControlInput'>
                            <Form.Label>CPF do responsável pela assinatura do contrato de prestação de serviços</Form.Label>
                            <Form.Control type='text' name="cpfResp" value={cpfResp} onChange={(e) => setCpfResp(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Tab>
                </Tabs>
                <div className='d-flex justify-content-center my-3'>
                    <Button className='btn-primary' type="submit">Enviar</Button>
                </div>
                
            </Form>
        </div>
    )
}

export default Formulario;