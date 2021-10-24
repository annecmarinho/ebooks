import React, { useState } from "react";
import Selecionados from "./Components/Selecionados"
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import "./Biblioteca.css"

function Biblioteca(){
  const [filtros, setFiltros] = useState([]);

  const livros = [
    {
      capa: "/images/Sapiens 1.png", 
      titulo: "Sapiens",
      autor: "Yuval Noah Harari "
    },
    {
      capa: "/images/AdmirávelMundoNovo.jpg", 
      titulo: "Admirável Mundo Novo",
      autor: "Aldoux Huxley"
    },
    {
      capa: "/images/ClaroEnigma.jpg", 
      titulo: "Claro Enigma",
      autor: "Carlos Drummond de Andrade"
    },
    {
      capa: "/images/Ritalee (1) 1 (1).png", 
      titulo: "Rita lee: uma autobiografia",
      autor: "Rita lee"
    },
    {
      capa: "/images/capa-diana 1 (1).png", 
      titulo: "Diana: Sua verdadeira historia",
      autor: "Andrew Morton"
    },
    {
      capa: "/images/capa-nelson mandela.jpg", 
      titulo: "A cor da liberdade: Os anos de presidencia",
      autor: "Mandla Langa e Nelson Mandela"
    },
    {
      capa: "/images/capa-o milagre da manhã.jpg", 
      titulo: "O milagre da manhã",
      autor: "Hall Elrod"
    },
    {
      capa: "/images/Cortiço 1.png", 
      titulo: "O cortiço",
      autor: "Aluísio Azevedo"
    },
    {
      capa: "/images/Dom Casmurro 1.png", 
      titulo: "Dom Casmurro",
      autor: "Machado de Assis"
    },
    {
      capa: "/images/quartodedespejo.jpg", 
      titulo: "Quarto de despejo",
      autor: "Carolina Maria de Jesus"
    },
    {
      capa: "/images/PippiMeialonga.jpg", 
      titulo: "Pippi Meialonga",
      autor: "Astrid Lindgren"
    },
    {
      capa: "/images/Scrum.jpg", 
      titulo: "Scrum: a arte de fazer o dobro do trabalho na metade do tempo",
      autor: "Jeff Sutherland"
    },
    {
      capa: "/images/PedagogiaDaAutonomia.jpg", 
      titulo: "Pedagogia da Autonomia",
      autor: "Paulo Freire"
    },
    {
      capa: "/images/Metamorfose 1.png", 
      titulo: "A metamorfose",
      autor: "Franz Kafka"
    },
    {
      capa: "/images/OsMiseráveis.jpg", 
      titulo: "Os miseráveis",
      autor: "Victor Hugo"
    },
    {
      capa: "/images/crimeecastigo.jpg", 
      titulo: "Crime e castigo",
      autor: "Fiodor Dostoievski"
    },
    {
      capa: "/images/OsHomensQueNao.jpg", 
      titulo: "Os homens que não amavam as mulheres",
      autor: "Stieg Larsson"
    },
    {
      capa: "/images/capa-a seleção 1.png", 
      titulo: "A seleção",
      autor: "Kierra Cass"
    },
    {
      capa: "/images/Morrodosventosuivantes 1.png", 
      titulo: "O morro dos ventos uivantes",
      autor: "Emily Brontë"
    },
    {
      capa: "/images/capa- a culpa é das estrelas.jpg", 
      titulo: "A culpa é das estrelas ",
      autor: "John Green"
    }

  ];


  function handleInputChange(e) {

    if(e.target.value === "None"){
      setFiltros("");
    }
    else {
      const value = e.target.value

      const newFiltros = [...filtros];
      const index = filtros.indexOf(value);

      if(index === -1) newFiltros.push(value);
      else newFiltros.splice(index, 1);
      setFiltros(newFiltros);
    }
    
  }

  return (
    <div className="Page">
      <div className="Filtro">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Filtros</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={filtros}
            onChange={handleInputChange}
            label="FIltros"
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Biografia">Biografia</MenuItem>
            <MenuItem value="Classicos brasileiros">Classicos brasileiros</MenuItem>
            <MenuItem value="Classicos estrangeiros">Classicos estrangeiros</MenuItem>
            <MenuItem value="Educação">Educação</MenuItem>
            <MenuItem value="Fantasia">Fantasia</MenuItem>
            <MenuItem value="Ficção científica">Ficção científica</MenuItem>
            <MenuItem value="Gestão e finanças">Gestão e finanças</MenuItem>
            <MenuItem value="Infantil">Infantil</MenuItem>
            <MenuItem value="Poesia">Poesia</MenuItem>
            <MenuItem value="Psicologia e religião">Psicologia e religião</MenuItem>
            <MenuItem value="Romance">Romance</MenuItem>
            <MenuItem value="Sociopolítica">Sociopolítica</MenuItem>
            <MenuItem value="Suspense">Suspense</MenuItem>
          </Select>
        </FormControl>
        <Selecionados selecionados={filtros} />
      </div>
      
      
      <div className ="Livros">
          {livros.map((livro) =>{
            return (
              <button className = "Botoes">
                <img src= {livro.capa} alt="capa" className="capa"></img>
                <h1>{livro.titulo}</h1>
                <h1>{livro.autor}</h1>
              </button>
            );
          })}
      </div>
    </div>
  );
}


export default Biblioteca;
