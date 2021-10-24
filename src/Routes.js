import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import Biblioteca from "./Biblioteca";
import Cadastro from "./Cadastro/Cadastro";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Livro from "./Livro";
import Perfil from "./Perfil";
import Menu from "./Menu";
import Footer from "./Footer";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={UserMenu} />
            </Switch>
        </BrowserRouter>
    );
}
function UserMenu() {
    return (
        <BrowserRouter>
            <Menu>
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/biblioteca" component={Biblioteca} />
                    <Route path="/livro" component={Livro} />
                    <Route path="/perfil" component={Perfil} />
                    <Route path="/cadastro" component={Cadastro} />
                    <Route component={() => <Redirect to="/home" />} />
                </Switch>
            </Menu>
            <Footer />
        </BrowserRouter>

    );
}

export default Routes;