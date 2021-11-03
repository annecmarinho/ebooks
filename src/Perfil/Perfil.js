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
    },
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
      <div className="perfil">
        <div className="sobremim">
          <h1 > Sobre Mim </h1>
          <h2>“ Pellentesque vehicula facilisis odio, ac vestibulum metus rutrum varius. Mauris leo velit, vehicula non odio non, rhoncus efficitur orci. Maecenas sollicitudin imperdiet nunc. Pellentesque sit amet leo semper nisl feugiat porta et egestas dolor. Phasellus scelerisque convallis erat, vitae venenatis tellus interdum ac. Praesent quis auctor ante, a mattis risus." </h2>
        </div>
        <div className="meuperfil">
          <h1> Meu Perfil</h1>
          <img className="circle" src="/images/Beth.jpg" alt="queen"></img>
        </div>
        <div className="detalhes">
          <h2> Detalhes </h2>
          <h1>Nome:<br />
            Soraya Silveira<br />
            E-mail:<br />
            Sorayasilv@gmail.com<br />
            Idade:<br />
            39 anos<br />
            Localização:<br />
            Belo Horizonte - MG </h1>
        </div>
      </div>

      <div className="parteebook">
        <h1 className="titlesalvo"> SALVOS PARA LER: </h1><br />
        <div className="ebookssalvos">

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
    </div>

  );
}

export default Perfil;