import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import "./Cadastro.css";

function Cadastro() {

    const [state, setState] = useState();
    const history = useHistory();


    function handleChange(e) { setState({ ...state, [e.target.name]: e.target.value }); }

    function handleCadastro(e) {
        e.preventDefault();

        if (state.password == state.confirmar) {
            delete state.confirmar;

            api
                .post('/users', state)
                .then(() => alert("Cadastrado com sucesso."))
                .catch((e) => alert("Erro"))
            history.push("/login");


        } else { alert("Senhas diferentes.") }
    }



    return (
        <div className="Base">
            <div className="Conteiner">
                <form>
                    <div className="inputs">
                        <h1 className="Titulo">Cadastro</h1>
                        <div className="Dados">
                            <input
                                placeholder="Nome"
                                name="nome"
                                onChange={handleChange}
                            />
                            <input
                                placeholder="E-mail"
                                name="email"
                                onChange={handleChange}
                                type="email"
                            />
                            <input
                                placeholder="Senha"
                                name="password"
                                onChange={handleChange}
                                type="password"
                            />
                            <input
                                placeholder="Confirmar senha"
                                name="confirmar"
                                onChange={handleChange}
                                type="password"
                            />
                            <input
                                placeholder="Fale um pouco sobre você"
                                name="descricao"
                                onChange={handleChange}
                                type="descrição"
                            />
                        </div>
                        <div className="Endereco">
                            <input
                                placeholder="Endereço"
                                name="endereço"
                                onChange={handleChange}
                            />
                            <input
                                placeholder="Numero"
                                name="número"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="Cidade">
                            <input
                                placeholder="Cidade"
                                name="cidade"
                                onChange={handleChange}
                            />
                            <input
                                placeholder="Estado"
                                name="estado"
                                onChange={handleChange}
                            />
                        </div>

                        <button className="Botao" type="submit" onClick={handleCadastro}>Finalizar cadastro</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;