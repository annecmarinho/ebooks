import React , {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import { userId } from "../services/auth";
import "./AlterarPerfil.css";

function AlterarPerfil(){

    const [state,setState] = useState();
    const history = useHistory();

    function handleChange(e) { setState({ ...state, [e.target.name]: e.target.value }); }

    function handleAlteração(e){
        e.preventDefault();
   
        delete state.user_id;
        delete state.firebase_id;

            api
                .put(`/users/${userId}`, state)
                .then(() => alert("Alterado com sucesso."))
                .catch((e) => alert("Erro"))
                history.push("/perfil");


    }

    useEffect(()=>{
        api 
          .get(`/users/${userId}`)
          .then((res)=>{setState(res.data)
        console.log(res)})
          .catch((e)=>alert("Os dados não foram recuperados"))
    },[])
    

    

    return(
            <div className="Base">
                <div className="Conteiner">
                    <form>
                        <div className="inputs">
                            <h1 className="Titulo">Alterar</h1>
                            <div className="Dados">
                                <input
                                    value={state?.nome}
                                    placeholder="Nome"
                                    name="nome"
                                    onChange={handleChange}
                                />
                                <input
                                    value={state?.email}
                                    placeholder="E-mail"
                                    name="email"
                                    onChange={handleChange}
                                    type="email"
                                />
                                <input
                                    value={state?.descricao}
                                    placeholder="Fale um pouco sobre você"
                                    name="descricao"
                                   onChange={handleChange}
                                    type="descrição"
                                />
                            </div>
                            <div className="Endereco">
                                <input
                                    value={state?.endereço}
                                    placeholder="Endereço"
                                    name="endereço"
                                    onChange={handleChange}
                                />
                                <input
                                    value={state?.número}
                                    placeholder="Numero"
                                    name="número"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="Cidade">
                                <input
                                    value={state?.cidade}
                                    placeholder="Cidade"
                                    name="cidade"
                                    onChange={handleChange}
                                />
                                <input
                                    value={state?.estado}
                                    placeholder="Estado"
                                    name="estado"
                                    onChange={handleChange}
                                />
                            </div>
    
                            <button className="Botao" type="submit" onClick={handleAlteração} >Alterar perfil</button>
                        </div>
                    </form>
                </div>
            </div>
       
    )
} export default AlterarPerfil;