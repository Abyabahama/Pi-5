import React from "react";
import { Routes, Route } from "react-router";
import login from './pages/Login';
import cadastro from './pages/Cadastro';
import cadastroIMT from "./pages/CadastroIMT";
import CadastroCNPJ from "./pages/CadastroCNPJ";
import CadastroRPA from "./pages/CadastroRPA";

const Main = () => {
    return(
        <Routes>
            <Route exact path="/" Component={login}></Route>
            <Route exact path="/cadastro" Component={cadastro}></Route>
            <Route exact path="/cadastro/imt" Component={cadastroIMT}></Route>
            <Route exact path="/cadastro/cnpj" Component={CadastroCNPJ}></Route>
            <Route exact path="/cadastro/rpa" Component={CadastroRPA}></Route>
        </Routes>
    )
}

export default Main