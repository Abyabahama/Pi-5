import React from "react";
import { Routes, Route } from "react-router";
import login from './pages/Login';
import cadastro from './pages/Cadastro';
import cadastroIMT from "./pages/CadastroIMT";
import CadastroCNPJ from "./pages/CadastroCNPJ";
import CadastroRPA from "./pages/CadastroRPA";
import Servico from "./pages/Atividades";
import CadastroAtv from "./pages/cadastroAtv";

const Main = () => {
    return(
        <Routes>
            <Route exact path="/" Component={login}></Route>
            <Route exact path="/cadastro" Component={cadastro}></Route>
            <Route exact path="/cadastro/imt" Component={cadastroIMT}></Route>
            <Route exact path="/cadastro/cnpj" Component={CadastroCNPJ}></Route>
            <Route exact path="/cadastro/rpa" Component={CadastroRPA}></Route>
            <Route exact path="/atividades" Component={Servico}></Route>
            <Route exact path="/atividades/cadastro" Component={CadastroAtv}></Route>
        </Routes>
    )
}

export default Main