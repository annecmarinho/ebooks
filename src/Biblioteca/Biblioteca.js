import React, { useState } from "react";
import Selecionados from "./Components/Selecionados"
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import "./Biblioteca.css"

function Biblioteca(){
  const [filtros, setFiltros] = useState([]);

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
            <MenuItem value="Mais vendidos">Mais vendidos</MenuItem>
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
        <button className="Botoes">
          <img src= "/images/cemanosdesolidao.jpg" alt="CemAnos" ></img>
          <h1>Cem anos de solidão</h1>
          <h1>Gabriel Garcia Marquez</h1>
        </button>
      </div>
    </div>
  );
}


export default Biblioteca;
