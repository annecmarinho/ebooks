import React from "react";

function Descricao_livro(props){


  return(
  <div>
  <h1> Autor: {props.autor}</h1>
  <h1> Categoria: {props.categoria}</h1>
  <h1> Descrição do livro:</h1>
  <br/>
  <h1>{props.sinopse}</h1>
  </div>
  
  );
  }

  export default Descricao_livro;