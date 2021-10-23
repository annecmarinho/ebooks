import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail, AiOutlineHome, AiOutlineInstagram } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { ListItemText  } from "@material-ui/core";
import "./Footer.css";

function Footer() {
    return(
      <div className="Rodape">
        <footer className="Footer">
          <div className= "Dados2">
            <div>
              <IconContext.Provider value={{color: "#FFFFFF", size: "1.5em"}}>
                <AiOutlineMail/>
              </IconContext.Provider>
              <ListItemText className="email">
                <p style={{fontFamily:"Overlock SC", marginLeft: "8px"}}>email: planetebooks@gmail.com</p>
              </ListItemText>
            </div>
            <div>
              <IconContext.Provider value={{color: "#FFFFFF", size: "1.5em"}}>
                <BsTelephone/>
              </IconContext.Provider>
              <ListItemText className="email">
                <p style={{fontFamily:"Overlock SC", marginLeft: "8px"}}>Telefone de contato: 31 3242-5166</p>
              </ListItemText>
            </div>
            <div>
              <IconContext.Provider value={{color: "#FFFFFF", size: "1.5em"}}>
                <AiOutlineHome/>
              </IconContext.Provider>
              <ListItemText className="email">
                <p style={{fontFamily:"Overlock SC", marginLeft: "8px"}}>Endereço: rua das flores brancas 77, Aubuquerque, Belo Horizonte</p>
              </ListItemText>
            </div>
            <div>    
              <IconContext.Provider value={{color: "#FFFFFF", size: "1.5em"}}>
                <AiOutlineInstagram/>
              </IconContext.Provider>
              <ListItemText className="email">
                <p style={{fontFamily:"Overlock SC", marginLeft: "8px"}}>@PlanetEbooks</p>
              </ListItemText>
            </div>
          </div>
        </footer>
        <img src= "/images/logo.png" alt="Logo2" className="logo2"></img>
      </div>
    )
}

export default Footer;