import React, { useEffect, useState } from "react";
import "./Livro.css"
import { RiHeartAddFill } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib'
import Descricao_livro from "../Descricao_livro";
import Comentario from "../Comentarios";
import api from "../services/api";
import { userId } from "../services/auth";



function Livro(props) {
    console.log(props);
    const [like, setLike] = useState(false);
    const [book, setBook] = useState([]);
    const { id } = props.match.params;

    async function likeBookUser() {
        try {
            const response = await api.post("/bookUser",{book_id:id, user_id:userId});
            setLike(true);
        } catch (error) {
            alert("Algo deu errado");
        }
    }

    async function unlikeBookUser() {
        try {
            const response = await api.delete(`/bookUser/${id}/${userId}`);
            setLike(false);
        } catch (error) {
            alert("Algo deu errado");
        }
    }

    async function getBook() {
        try {
            const response = await api.get(`/books/${id}`);
            setBook(response.data);
            setLike(response.data.user_id);
        } catch (error) {
            alert("Algo deu errado");
        }
    }

    useEffect(() => {
        getBook();
    }, [])

    useEffect(() => {
        console.log(like);
    }, [like])


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
                            {like ? 
                                (<button className="btn unlike" onClick={unlikeBookUser}> <RiHeartAddFill /> </button>):
                                (<button className="btn" onClick={likeBookUser}> <RiHeartAddFill /> </button>)                         
                            }
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Livro;