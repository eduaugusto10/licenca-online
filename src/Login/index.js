import React, { useContext, useState } from "react";
import { Button, Container, Input, Text, Form } from "./style";
import api from "../services/api";
import AuthContext from "../context/auth";
import { login } from "../services/auth";

export function Login() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
    } else {
      try {
        api
          .post(
            "/sessions",
            {
              email,
              password,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((result) => {
            login(result.data.token);
            signIn(result.data);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Text>Login</Text>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;
