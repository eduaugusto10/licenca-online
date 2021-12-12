import React, { useState } from "react";
import { Button, Container, Input, Text, Div } from "./style";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export function Register() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [licenseDate, setLicenseDate] = useState("");
  const [broker, setBroker] = useState("");
  const [plan, setPlan] = useState("");
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [btnRegister, setBtnRegister] = useState("Registrar");

  async function registerUsers() {
    setBtnRegister("Aguarde...");
    const data = new FormData();
    data.append("name", name);
    data.append("license_validate", licenseDate);
    data.append("broker", broker);
    data.append("plan", plan);
    data.append("account", account);
    data.append("email", email);
    data.append("administrator", 0);

    try {
      api.post("/users", data).then((result) => {
        setBtnRegister("Feito!");
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Text>Cadastrar Usuário</Text>
      <Div>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Conta"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Corretora"
          value={broker}
          onChange={(e) => setBroker(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Validade da Licença: aaaa/mm/dd"
          value={licenseDate}
          onChange={(e) => setLicenseDate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Plano"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        />
        <Button onClick={registerUsers}>{btnRegister}</Button>
        <Button onClick={() => history("/login")}>Voltar</Button>
      </Div>
    </Container>
  );
}

export default Register;
