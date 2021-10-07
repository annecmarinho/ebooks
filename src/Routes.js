import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Cadastro from "./Cadastro/Cadastro";
import Home from "./Home/Home";
import Login from "./Login/Login";

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/cadastro" component={Cadastro}/>
         </Switch>
        </BrowserRouter>
    );
}

export default Routes;