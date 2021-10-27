import React from "react";
import "./Perfil.css"
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function Perfil() {
    const livroperfil = [
        {
            capa: "/images/AdmirávelMundoNovo.jpg",
            titulo: "Admirável Mundo Novo - Aldous Huxley"
        },
        {
            capa: "/images/Coraline.jpg",
            titulo: "Coraline - Neil Gaiman "
        },
        {
            capa: "/images/pipi.jpg",
            titulo: "Pippi Meialonga - Astrid Lindgren "
        },
        {
            capa: "/images/scrum.jpg",
            titulo: " Scrum - Jeff Sutherland "
        }
    ];

    const livrosalvo = [
        {
            capa: "/images/quartodedespejo.jpg",
            titulo: " Quarto de Despejo - Carolina Maria de Jesus "
        },

        {
            capa: "/images/ebook.png",
            titulo: " Os Homens que Não Amavam as Mulheres- Stieg Larsson "
        },

        {
            capa: "/images/capa-diana.jpg",
            titulo: " Diana: Sua verdadeira história - Andrew Morton "
        },

        {
            capa: "/images/culpadasestrelas.jpg",
            titulo: " A Culpa é das Estrelas - Jhon Green "
        }

    ];


    return (
        <div className="baseperfil">

            <div className="meuperfil">
                <h1> Meu Perfil</h1>
            </div>
            <div className="titsobremim">
                <h1> Sobre Mim </h1>
            </div>
            <div className="sobremim">
                <h1>“ Pellentesque vehicula facilisis odio, ac vestibulum metus rutrum varius. Mauris leo velit, vehicula non odio non, rhoncus efficitur orci. Maecenas sollicitudin imperdiet nunc. Pellentesque sit amet leo semper nisl feugiat porta et egestas dolor. Phasellus scelerisque convallis erat, vitae venenatis tellus interdum ac. Praesent quis auctor ante, a mattis risus. </h1>
            </div>
            <div className="detalhes">
                <h1> Detalhes </h1>
            </div>
            <div className="detalhes2">
                <h1>Nome:</h1>
                <h1>Soraya Silveira</h1>
                <h1>E-mail:</h1>
                <h1> Sorayasilv@gmail.com</h1>
                <h1>Idade:</h1>
                <h1> 39 anos</h1>
                <h1>Localização:</h1>
                <h1> Belo Horizonte - MG </h1>
            </div>


            <img className="circle" src="/images/Beth.jpg" alt="queen"></img>


            <div className="partebook">

                <div className="ebooklido">
                    <h1> EBOOKS JÁ LIDOS: </h1><br />

                    <div className="section1">

                        {livroperfil.map((livro) => {
                            return (
                                <button className="fundo">
                                    <img src={livro.capa} alt="dispo" className="image" ></img>
                                    <h1>{livro.titulo}</h1>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="ebooksalvos">
                    <h1> SALVOS PARA LER: </h1><br />
                    <div className="section2">

                        {livrosalvo.map((livro) => {
                            return (
                                <button className="fundo">
                                    <img src={livro.capa} alt="dispo" className="image" ></img>
                                    <h1>{livro.titulo}</h1>
                                </button>
                            );
                        })}
                    </div>
                </div>



            </div>

        </div>
    );
}

export default Perfil;