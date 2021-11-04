import React, { useState, useEffect } from "react";
import "./Perfil.css";
import api from "../services/api";
import { userId, logout } from "../services/auth";
import { useHistory } from "react-router-dom";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function Perfil() {

  const [user, setUser] = useState({});
  const [bookuser, setBookUser] = useState([]);
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("/home");

  function handleClick(pathName) {
    history.push(pathName);
    setCurrentPage(pathName);
  }

  function handleDelete() {
    api
      .delete(`/users/${userId}`)
      .then(res => {
        logout();
        history.push("/Home")
      })
      .catch((e) => alert("Erro"))
  }


  useEffect(() => {
    api
      .get(`/users/${userId}`)
      .then(res => { setUser(res.data) })
      .catch((e) => alert("Erro"))

    api
      .get(`/bookUser/${userId}`)
      .then(res => { setBookUser(res.data) })
      .catch((e) => alert("Erro"))

  }, []);

  return (
    <div className="baseperfil">
      <div className="perfil">
        <div className="sobremim">
          <h1 > Sobre Mim </h1>
          <h2>{user.descricao}</h2>
        </div>
        <div className="meuperfil">
          <h1> Meu Perfil</h1>
          <img className="circle" src="/images/Beth.jpg" alt="queen"></img>
        </div>
        <div className="detalhes">
          <h2> Detalhes </h2>
          <h1>Nome:<br />
            {user.nome}<br />
            E-mail:<br />
            {user.email}<br />
            Localização:<br />
            {`${user.endereço}, ${user.número}`}<br />
            {`${user.cidade},${user.estado}`} </h1>
        </div>

        <div className="Botões">
          <button className="Botao" type="submit" onClick={() => handleClick("/alterarperfil")}>Alterar conta</button>
          <button className="Botao" type="submit" onClick={handleDelete}>Deletar conta</button>
          <button className="Botao" type="submit" onClick={logout} >Sair</button>
        </div>
      </div>

      <div className="parteebook">
        <h1 className="titlesalvo"> SALVOS PARA LER: </h1><br />
        <div className="ebookssalvos">

          {bookuser.map((livro) => {
            return (
              <button className="fundo">
                <img src= {`/images/${livro.título}.png`} alt="dispo" className="image" ></img>
                <h1>{livro.título}</h1>
              </button>
            );
          })}
        </div>
      </div>
    </div>

  );
}

export default Perfil;