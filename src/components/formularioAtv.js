import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import CompTecn from './compTecn'
import CompTran from "./compTran";


const FormularioAtv = () => {
    const [field, setField] = useState([]);
    return (
            <div>
                
                <Tabs>
                    <Tab eventKey="geral" title="Informações Gerais">
                        <Form>
                            <Form.Group className='mb-1 mt-3' controlId='nome.ControlInput'>
                                <Form.Label>Nome Sugerido da Atividade</Form.Label>
                                <Form.Control type='name'></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-1 mt-3' controlId='rg.ControlInput'>
                                <Form.Label>RG do Aplicador/Professor</Form.Label>
                                <Form.Control type='rg'></Form.Control>
                            </Form.Group>
                            <Form.Select className="mt-3">
                                <option>Nome do responsavel de PAE em sua área (contato no IMT)</option>
                                <option value="1">Anderson Harayashiki Moreira</option>
                                <option value="2">Armando Zanone</option>
                                <option value="3">Everson Denis</option>
                                <option value="3">Flavia Loss de Araujo</option>
                                <option value="3">Gabriela Sá Leitão de Mello</option>
                                <option value="3">Keiti Pereira Vidal de Souza</option>
                                <option value="3">Marcelo Marques Gomes</option>
                                <option value="3">Mariana Fontes Perez Rial</option>
                                <option value="3">Murilo Marcos Orefice</option>
                                <option value="3">Valdir Melero Junior</option>
                                <option value="3">Vanessa Seriacopi</option>
                                <option value="3">Wanderson de Oliveira Assis</option>
                            </Form.Select>
                            <Form.Group className='my-2' controlId='descricao.ControlInput'>
                                <Form.Label>Descrição breve da atividade</Form.Label>
                                <Form.Control as="textarea" rows="4" type='descricao'></Form.Control>
                            </Form.Group>
                            <Form.Select className="mt-3">
                                <option>Escolha  a categoria do seu PAE</option>
                                <option value="1">Capacitação em softwares</option>
                                <option value="2">Carreiras</option>
                                <option value="3">Cidadania</option>
                                <option value="3">Cidades e soluções urbanas</option>
                                <option value="3">Ciência de dados</option>
                                <option value="3">Ciências aplicadas</option>
                                <option value="3">Ciências exatas</option>
                                <option value="3">Competências gerenciais</option>
                                <option value="3">Competições acadêmicas</option>
                                <option value="3">Computação em Nuvem</option>
                                <option value="3">Desenvolvimento de habilidades socioemocionais</option>
                                <option value="3">Desenvolvimento de software</option>
                                <option value="3">Empreendedorismo</option>
                                <option value="3">Energia</option>
                                <option value="3">Expressão e representação gráfica</option>
                                <option value="3">Finanças</option>
                                <option value="3">Gestão industrial</option>
                                <option value="3">Hardware e sistemas embarcados</option>
                                <option value="3">Jogos</option>
                                <option value="3">Maquetes e modelagem</option>
                                <option value="3">Materiais</option>
                                <option value="3">Meio ambiente e sustentabilidade</option>
                                <option value="3">Metodologia da pesquisa e redação técnica</option>
                                <option value="3">Pesquisa e desenvolvimento de produtos</option>
                                <option value="3">Projetos e processos industrias</option>
                                <option value="3">Redes e Infraestrutura</option>
                                <option value="3">Robótica e automação</option>
                                <option value="3">Segurança Digital</option>
                                <option value="3">Simulação e otimização computacional</option>
                                <option value="3">Soluções de Engenharia</option>
                            </Form.Select>
                            <Form.Group className='my-2' controlId='publico.ControlInput'>
                                <Form.Label>Indicado para: (Indique o público alvo, sem impor restrições)</Form.Label>
                                <Form.Control as="textarea" rows="3" type='publico'></Form.Control>
                            </Form.Group>
                            <Form.Group className='my-2' controlId='objetivo.ControlInput'>
                                <Form.Label>Objetivos da atividade</Form.Label>
                                <Form.Control as="textarea" rows="3" type='objetivo'></Form.Control>
                            </Form.Group>
                            <Form.Group className='my-2' controlId='metodo.ControlInput'>
                                <Form.Label>Metodologia aplicada</Form.Label>
                                <Form.Control as="textarea" rows="3" type='metodo'></Form.Control>
                            </Form.Group>
                            <Form.Group className='my-2' controlId='topicos.ControlInput'>
                                <Form.Label>Tópicos abordados/Etapas (Separe os tópicos por virgula)</Form.Label>
                                <Form.Control as="textarea" rows="3" type='topicos'></Form.Control>
                            </Form.Group>
                            <Form.Group className='my-2' controlId='desafios.ControlInput'>
                                <Form.Label>Indique os desafios propostos aos alunos</Form.Label>
                                <Form.Control as="textarea" rows="3" type='desafios'></Form.Control>
                            </Form.Group>
                            <Form className="my-3">
                                <Form.Label>Tamanho de sala desejado:</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="20 a 30 alunos"
                                    name="sala"
                                    id="g"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Menos de 20 alunos (somente em situações onde recurso especiais são necessários: laboratórios, etc"
                                    name="sala"
                                    id="p"
                                />
                            </Form>
                            <Form className="my-3">
                                <Form.Label>Planeja haver participação da comunidade externa/sociedade</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Sim"
                                    name="sala"
                                    id="comParticipacao"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Não"
                                    name="sala"
                                    id="semParticipacao"
                                />
                            </Form>
                            <Form.Group className='my-2' controlId='materiais.ControlInput'>
                                <Form.Label>Indique os materiais e ferramentas nescessárias para os encontros. Indique também o tipo de sala</Form.Label>
                                <Form.Control as="textarea" rows="4" type='materiais'></Form.Control>
                            </Form.Group>
                        </Form>
                    </Tab>
                    <Tab eventKey="competencias" title="Competências">
                        <Form.Label className="mt-2">Escolha uma competência técnica</Form.Label>
                        <CompTecn></CompTecn>
                        <Form.Label>Escolha uma segunda competência técnica (se desejar)</Form.Label>
                        <CompTecn></CompTecn>

                        <Form.Label className="mt-2">Escolha uma competência tranversal</Form.Label>
                        <CompTran></CompTran>
                        <Form.Label>Escolha uma segunda competência tranversal (se desejar)</Form.Label>
                        <CompTran></CompTran>
                    </Tab>
                    <Tab eventKey="midia" title="Mídia">
                        <Form.Label className="my-3 h5">É nescessário escolher de 1 a 3 imagens para ilustrar sua atividade. (100 MB por imagem)</Form.Label>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Imagem 1</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Imagem 2</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Imagem 3</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='ilustrativo.ControlInput'>
                            <Form.Label>Link para vídeo ilustrativo (opcional)</Form.Label>
                            <Form.Control type='link'></Form.Control>
                        </Form.Group>
                    </Tab>
                    <Tab eventKey="horarios" title="Horários">
                        <Form.Label className="my-3 h5">Primeira opção de dia e horário para os encontros</Form.Label>
                        <Form className="">
                                <Form.Label>Dia</Form.Label>
                                <Form.Check type="radio" label="Segunda-Feira" name="dia1" id="1"/>
                                <Form.Check type="radio" label="Terça-Feira" name="dia1" id="2"/>
                                <Form.Check type="radio" label="Quarta-Feira" name="dia1" id="3"/>
                                <Form.Check type="radio" label="Quinta-Feira" name="dia1" id="4"/>
                                <Form.Check type="radio" label="Sexta-Feira" name="dia1" id="5"/>
                                <Form.Check type="radio" label="Sábado" name="dia1" id="6"/>
                        </Form>
                        <Form className="mt-2">
                                <Form.Label>Horário</Form.Label>
                                <Form.Check type="radio" label="07h40 às 09h20" name="hora1" id="1"/>
                                <Form.Check type="radio" label="09h30 às 11h10" name="hora1" id="2"/>
                                <Form.Check type="radio" label="11h20 às 13h00" name="hora1" id="3"/>
                                <Form.Check type="radio" label="13h10 às 14h50" name="hora1" id="4"/>
                                <Form.Check type="radio" label="15h00 às 16h40" name="hora1" id="5"/>
                                <Form.Check type="radio" label="16h50 às 18h30" name="hora1" id="6"/>
                                <Form.Check type="radio" label="19h00 às 20h40" name="hora1" id="7"/>
                                <Form.Check type="radio" label="20h50 às 22h30" name="hora1" id="8"/>
                        </Form>
                        <Form.Label className="my-3 h5">Segunda opção de dia e horário para os encontros</Form.Label>
                        <Form className="">
                                <Form.Label>Dia</Form.Label>
                                <Form.Check type="radio" label="Segunda-Feira" name="dia2" id="1"/>
                                <Form.Check type="radio" label="Terça-Feira" name="dia2" id="2"/>
                                <Form.Check type="radio" label="Quarta-Feira" name="dia2" id="3"/>
                                <Form.Check type="radio" label="Quinta-Feira" name="dia2" id="4"/>
                                <Form.Check type="radio" label="Sexta-Feira" name="dia2" id="5"/>
                                <Form.Check type="radio" label="Sábado" name="dia2" id="6"/>
                        </Form>
                        <Form className="mt-2">
                                <Form.Label>Horário</Form.Label>
                                <Form.Check type="radio" label="07h40 às 09h20" name="hora2" id="1"/>
                                <Form.Check type="radio" label="09h30 às 11h10" name="hora2" id="2"/>
                                <Form.Check type="radio" label="11h20 às 13h00" name="hora2" id="3"/>
                                <Form.Check type="radio" label="13h10 às 14h50" name="hora2" id="4"/>
                                <Form.Check type="radio" label="15h00 às 16h40" name="hora2" id="5"/>
                                <Form.Check type="radio" label="16h50 às 18h30" name="hora2" id="6"/>
                                <Form.Check type="radio" label="19h00 às 20h40" name="hora2" id="7"/>
                                <Form.Check type="radio" label="20h50 às 22h30" name="hora2" id="8"/>
                        </Form>
                    </Tab>
                </Tabs>
            </div>
    )
}

export default FormularioAtv;