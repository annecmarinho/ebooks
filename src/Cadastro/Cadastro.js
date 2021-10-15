import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Cadastro.css";


function Cadastro(){
    return(
        <div className="Base">
          <div className="Container">
            <h1>CADASTRO</h1>
            <form>
              <div className="inputs1">
                <Form.Group className="mb-3" controlId="formGridNome">
                  <Form.Control placeholder="Nome" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridSenha">
                  <Form.Control type="password" placeholder="Senha" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridConfirmarsenha">
                  <Form.Control type="password" placeholder="Confirmar senha" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="Endereco" placeholder="Endereco" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="Numero" placeholder="Numero" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="Cidade" placeholder="Cidade" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="Estado" placeholder="Estado" />
                  </Form.Group>
                </Row>

                <Button variant="primary">Primary</Button>

              </div>
            </form>
        </div>
      </div>
    ) 
}

export default Cadastro;