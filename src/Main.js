import React from "react";
import { Routes, Route } from "react-router";
import login from './pages/Login';
import cadastro from './pages/Cadastro';
import cadastroIMT from "./pages/CadastroIMT";

const Main = () => {
    return(
        <Routes>
            <Route exact path="/" Component={login}></Route>
            <Route exact path="/cadastro" Component={cadastro}></Route>
            <Route exact path="/cadastro/imt" Component={cadastroIMT}></Route>
        </Routes>
    )
}

export default Main