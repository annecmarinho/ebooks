import React from "react";
import {Form,Button} from "react-bootstrap"
import "./Login.css"

function Login(){
    return (
<div className="page">
    <Form>
    <div className="container">
      
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{fontFamily:"Overlock SC"}}>Email:</Form.Label>
    <Form.Control type="email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicSenha">
    <Form.Label style={{fontFamily:"Overlock SC"}}>Senha:</Form.Label>
    <Form.Control type="password" />
  </Form.Group>
    
  <Button variant="primary" size="lg" style={{backgroundColor:"#773344",fontFamily:"Overlock SC" }}>
    Login
  </Button>
     
    <Button variant="link" style={{color:"#773344",fontFamily:"Overlock SC" }}>Esqueceu a senha?</Button>
    <Button variant="link"  style={{color:"#773344",fontFamily:"Overlock SC"}}>Não possui cadastro? Cadastre-se!</Button>
  


</div>  
</Form>
</div>

    );

}

export default Login;