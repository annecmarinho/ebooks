import React from "react";
import "./Livro.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function Livro(){

    return(
    <div className="base">

        <div className="center">
    <div className="capa">
    <img src="/images/ebook.png" alt="ebook"></img>
    </div> 
    <div className="titulo_livro">
    <h1> Os Homens que Não Amavam as Mulheres</h1>
    </div>
    <div className="info_livro">
    <h1> Autor: Stieg Larsson</h1>
    <h1> Categoria: Suspense</h1>
    <h1> Sinopse:</h1>
    </div>
    <div className="sinopse">
    <h1> Em 1966, Harriet Vanger, jovem herdeira de um império industrial, some sem deixar vestígios. No dia de seu desaparecimento, fechou-se o acesso à ilha onde ela e membros de sua extensa família se encontravam. Desde então, a cada ano, Henrik Vanger, o velho patriarca do clã, recebe, no dia de seu aniversário, uma flor emoldurada - o mesmo presente que Harriet lhe dava, até desaparecer. Henrik está convencido de que ela foi assassinada e que um Vanger a matou, provavelmente por ganância, pelo facto de ela ser a virtual herdeira de todo o império industrial de Henrik. O livro desenvolve-se apresentando os factos e os vários personagens pouco a pouco, deixando o leitor curioso sobre o desfecho da história.</h1>
    <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>

    </div>
    </div>

    <div className="center_comment">
        <div className="titulo_comment">
    <h1>Comentários dos Usuários</h1>
    </div>
    <div className="comment1">
        <h1>“Aenean ullamcorper tortor tortor, vel eleifend felis volutpat ut. Nullam quis commodo ligula. Cras quis faucibus lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id est in ligula efficitur sagittis eu a massa. Mauris interdum posuere dolor et commodo. Nulla pharetra tincidunt purus in suscipit.
”

</h1></div>
        <div className="aut_comment1">
         <h1>  Ana Beatriz
        </h1></div>
        
        <div className="comment2">
        <h1>“Ut tincidunt et ante vel dignissim. Pellentesque vehicula facilisis odio, ac vestibulum metus rutrum varius. Mauris leo velit, vehicula non odio non, rhoncus efficitur orci. Maecenas sollicitudin imperdiet nunc, eget tincidunt dolor interdum quis. Pellentesque sit amet leo semper nisl feugiat porta et egestas dolor. Phasellus scelerisque convallis erat, vitae venenatis tellus interdum ac. Praesent quis auctor ante, a mattis risus. Maecenas sit amet interdum orci.”</h1> </div>
        <div className="aut_comment2">
           <h1> Angelica </h1>
        </div>
        
    </div>

    </div>



    );
}

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }

export default Livro;