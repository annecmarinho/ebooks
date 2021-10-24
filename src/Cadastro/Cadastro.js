import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import "./Cadastro.css";

function Cadastro(){

    const [membro, setMembro] = useState({});
    const history = useHistory();

    function handleInputChange(e) {
        const key = e.target.name;

        const newMembro = {...membro};
        newMembro[key] = e.target.value;

        setMembro(newMembro);
        console.log(newMembro);
    }

    function cadastro(){
        alert("Bem vindo!\n");
        history.push("Home");
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
                                onChange={handleInputChange} 
                            />
                            <input 
                                placeholder="E-mail"
                                name="email"
                                onChange={handleInputChange} 
                                type="email"
                            />
                            <input 
                                placeholder="Senha"
                                name="senha"
                                onChange={handleInputChange} 
                                type="password"
                            />
                            <input 
                                placeholder="Confirmar senha"
                                name="confirmar"
                                onChange={handleInputChange} 
                                type="password"
                            />
                        </div>
                        <div className="Endereco">
                            <input 
                                placeholder="Endereço"
                                name="endereço"
                                onChange={handleInputChange} 
                            />
                            <input 
                                placeholder="Numero"
                                name="ñumero"
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div className="Cidade">
                            <input 
                                placeholder="Cidade"
                                name="cidade"
                                onChange={handleInputChange} 
                            />
                            <input 
                                placeholder="Estado"
                                name="estado"
                                onChange={handleInputChange}
                            />
                        </div>
                        <button className="Botao" type="submit" onClick={cadastro}>Finalizar cadastro</button> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;