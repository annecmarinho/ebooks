import React from "react";
import { Form, Button } from "react-bootstrap"
import "./Login.css"

function Login() {
  return (
    <div className="page">
      <Form style={{ width: "600px" }}>
        <div className="container">
          <h1>Login</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: "420px", marginTop: "30px" }}>
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSenha" style={{ width: "420px", }}>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>

          <Button
            className="BotaoLogin"
            variant="primary"
            size="lg"
            style={{
              border: " 1px solid #333333",
              backgroundColor: "#773344",
              fontFamily: "Overlock SC",
              width: "420px",
              marginBottom: "20px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            Login
          </Button>

          <Button variant="link" style={{ color: "#773344", fontFamily: "Overlock SC", lineHeight: "10px" }}>Esqueceu a senha?</Button>
          <Button variant="link" style={{ color: "#773344", fontFamily: "Overlock SC" }}>Não possui cadastro? Cadastre-se!</Button>



        </div>
      </Form>
    </div>

  );

}

export default Login;