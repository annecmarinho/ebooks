import React from "react";

function Comentario(props){
  return(
    <div>
    <h1> {props.comment}</h1>
    <br/><br/>
    <h1> {props.aut_comment}</h1>
    </div>
    
    );
    
}

export default Comentario;