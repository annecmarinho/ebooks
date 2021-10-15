import React from "react";
import "./Livro.css"

function Livro(){

    return(
    <div className="base">

    <div className="container">
    <h1> Título do livro</h1>
    </div>    

    <div className="capa">
    <img src="/images/ebook.png" alt="ebook"></img>
    </div>

    <div className="info">
    <h1> Autor</h1>
    <h1> Categoria</h1>
    <h1> Sinopse</h1>
    <h1> Descrição do livro</h1>

    </div>


    </div>


    );
}

export default Livro;