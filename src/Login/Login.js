import React from "react";
import {Form,Button} from "react-bootstrap"
import "./Login.css"

function Login(){
    return (
<div className="page">
    <Form>
    <div className="container">
      
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicSenha">
    <Form.Label>Senha:</Form.Label>
    <Form.Control type="password" />
  </Form.Group>
    
  
    
 

  <div className="button-login">
    <button>Login</button>
    </div>

    <div className="button-extra">
    <Button variant="link">Esqueceu a senha?</Button>
    <Button variant="link">Não possui cadastro? Cadastre-se!</Button>
    </div>


</div>  
</Form>
</div>

    );

}

export default Login;