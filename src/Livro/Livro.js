import React, { useEffect, useState } from "react";
import "./Livro.css"
import { RiHeartAddFill } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib'
import Descricao_livro from "../Descricao_livro";
import Comentario from "../Comentarios";
import api from "../services/api";



function Livro(props) {
    console.log(props);
    const [book, setBook] = useState([]);
    const [bookUser, setBookUser] = useState([]);
    const { id } = props.match.params;

    async function createBookUser() {
        try {
            const response = await api.post("/bookUser");
            setBookUser([...response.data]);
        } catch (error) {
            alert("Algo deu errado");
        }
    }

    async function getBook() {
        try {
            const response = await api.get(`/books/${id}`);
            setBook(response.data);
        } catch (error) {
            alert("Algo deu errado");
        }
    }

    useEffect(() => {
        getBook();
    }, [])


    return (
        <div className="base">

            <div className="center">
                <div className="capax">
                    <img src={`/images/${book.título}.png`} alt="capa" className="capa"></img>
                </div>
                <div className="texto_livro">
                    <h1 className="titulo_livro"> {book.título}</h1><br />
                    <div className="descricao_livro">
                        < Descricao_livro {...book} />
                        <IconContext.Provider value={{ size: "1.5em" }}>
                            <button class="btn" onClick={createBookUser}> <RiHeartAddFill /> </button> &nbsp;
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Livro;