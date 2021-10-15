import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Biblioteca from "./Biblioteca";
import Cadastro from "./Cadastro/Cadastro";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Livro from "./Livro";
import Perfil from "./Perfil";

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/biblioteca" component={Biblioteca}/>
        <Route path="/livro" component={Livro}/>
        <Route path="/perfil" component={Perfil}/>
        <Route path="/cadastro" component={Cadastro}/>
         </Switch>
        </BrowserRouter>
    );
}

export default Routes;