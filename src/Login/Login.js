
import {React, useState} from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from"../services/api";
import {login} from "../services/auth";
import "./Login.css";

function Login() {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    try{
      console.log(email,password);
      const response = await api.post('/login',{email,password});
      console.log(response.data.user)
      alert ("Bem vindo", response.data.user.name);
      login(response.data.accessToken,response.data.user.user_id);
      window.location.href="/home";
      
    }catch(error){
      console.log(error);
      if(error.response.status === 403){
        alert ("Credenciais Invalidas!");
      }else{
        alert(error.response.data.notification);
      }
      console.warn(error);
      
    }
 
  }
  return (
    <div className="page">
      <Form style={{ width: "600px" }}>
        <div className="containerx">
          <h1>Login</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: "85%", marginTop: "30px" }}>
            <Form.Control type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSenha" style={{ width: "85%", }}>
            <Form.Control type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
          </Form.Group>

          <Button
            className="BotaoLogin"
            variant="primary"
            size="lg"
            style={{
              border: " 1px solid #333333",
              backgroundColor: "#773344",
              fontFamily: "Overlock SC",
              width: "85%",
              marginBottom: "20px",
              height: "auto",
              display: "flex",
              alignItems: "center",
              fontSize: "clamp(1em, 1em + 1vw, 1.5em)",
              justifyContent: "center"
            }}
            onClick={handleLogin}
          >
            Login
          </Button>





        </div>
      </Form>
    </div>

  );

}

export default Login;