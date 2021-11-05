import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Selecionados from "./Components/Selecionados";
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import "./Biblioteca.css";
import api from "../services/api";

function Biblioteca() {
  const [filtros, setFiltros] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [books, setBooks] = useState([]);
  const history = useHistory();
  const [filteredBooks, setFilteredBooks] = useState([]);

  async function getBooks() {
    try {
      const response = await api.get("/books");
      setBooks([...response.data]);
      if(filtros.length > 0){
        setBooks([...response.data].filter(book => book.categoria === filtros[0]));
      }
    } catch (error) {
      alert("Algo deu errado");
    }
  }

  useEffect(() => {
    getBooks();
  }, [filtros])


  // useEffect(() => {
  //   if(filtros[0] !== ""){
  //     setFilteredBooks(books.filter(book => book.categoria === filtros[0]));
  //   }
  //   else {
  //     getBooks();
  //   }
  // }, [filtros])

  function handlebook(id) {
    history.push(`/livro/${id}`);
  }

 


  function handleInputChange(e) {

    if (e.target.value === "None") {
      setFiltros("");
    }
    else {
      const value = e.target.value

      // const newFiltros = [...filtros];
      // const index = filtros.indexOf(value);

      // if (index === -1) newFiltros.push(value);
      // else newFiltros.splice(index, 1);
      setFiltros([value]);
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
            <MenuItem value="Clássicos nacionais">Clássicos nacionais</MenuItem>
            <MenuItem value="Clássicos estrangeiros">Clássicos estrangeiros</MenuItem>
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


      <div className="Livros">
        {books.map((book) => {
            return (
              <button className="Botoes" onClick={()=> handlebook(book.book_id)}>
                <img src={`/images/${book.título}.png` || `/images/${book.título}.jpg` } alt="capa" className="capa"></img>
                <h1>{book.título}</h1>
                <h1>{book.autor}</h1>
              </button>
            );
          })}
      </div>
    </div>
  );
}


export default Biblioteca;
