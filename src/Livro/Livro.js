import React from "react";
import "./Livro.css"
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib'
import Descricao_livro from "../Descricao_livro";
import Comentario from "../Comentarios";

const homensmulheres = {
    autor: 'Stieg Larson',
    categoria: 'Suspense',
    sinopse: 'Em 1966, Harriet Vanger, jovem herdeira de um império industrial, some sem deixar vestígios. No dia de seu desaparecimento, fechou-se o acesso à ilha onde ela e membros de sua extensa família se encontravam. Desde então, a cada ano, Henrik Vanger, o velho patriarca do clã, recebe, no dia de seu aniversário, uma flor emoldurada - o mesmo presente que Harriet lhe dava, até desaparecer. Henrik está convencido de que ela foi assassinada e que um Vanger a matou, provavelmente por ganância, pelo facto de ela ser a virtual herdeira de todo o império industrial de Henrik. O livro desenvolve-se apresentando os factos e os vários personagens pouco a pouco, deixando o leitor curioso sobre o desfecho da história.',
}
const comment1 = {
    comment: 'Aenean ullamcorper tortor tortor, vel eleifend felis volutpat ut. Nullam quis commodo ligula. Cras quis faucibus lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    aut_comment: 'Ana Beatriz',
};

const comment2 = {
    comment: '“Ut tincidunt et ante vel dignissim. Pellentesque vehicula facilisis odio, ac vestibulum metus rutrum varius. Mauris leo velit, vehicula non odio non, rhoncus efficitur orci. Maecenas sollicitudin imperdiet nunc, eget tincidunt dolor interdum quis. Pellentesque sit amet leo semper nisl feugiat porta et egestas dolor. Phasellus scelerisque convallis erat, vitae venenatis tellus interdum ac. Praesent quis auctor ante, a mattis risus. Maecenas sit amet interdum orci.”',
    aut_comment: 'Angelica',
};



function Livro() {

    return (
        <div className="base">

            <div className="center">
                <div className="capa">
                    <img src="/images/ebook.png" alt="ebook"></img>
                </div>
                <div className="titulo_livro">
                    <h1> Os Homens que Não Amavam as Mulheres</h1>
                </div>
                <div className="descricao_livro">
                    < Descricao_livro {...homensmulheres} /><br />
                    <IconContext.Provider value={{ size: "1.5em" }}>
                        <button class="btn"> <AiFillLike /> </button> &nbsp;
                        <button class="btn"> <AiFillDislike /> </button>

                    </IconContext.Provider>
                </div>
            </div>

            <div className="center_comment">
                <div className="titulo_comment">
                    <h1>Comentários:</h1>
                    <br /><br />
                    <Comentario {...comment1} />
                    <hr />
                    <Comentario {...comment2} />
                </div>
            </div>

        </div>


    );
}

export default Livro;