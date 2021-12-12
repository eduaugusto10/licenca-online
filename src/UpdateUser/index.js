import React, { useState, useContext, useEffect } from "react";
import { Button, Container, Input, Text, Div } from "./style";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "../services/api";
import AuthContext from "../context/auth";

export function UpdateUser() {
  const history = useNavigate();
  const { idUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [licenseDate, setLicenseDate] = useState("");
  const [broker, setBroker] = useState("");
  const [plan, setPlan] = useState("");
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [btnRegister, setBtnRegister] = useState("Alterar");

  useEffect(() => {
    async function queryUsers() {
      try {
        api.get(`/user/${idUser}`).then((result) => {
          setName(result.data.name);
          setEmail(result.data.email);
          setAccount(result.data.account);
          setBroker(result.data.broker);
          setLicenseDate(result.data.license_validate);
          setPlan(result.data.plan);
        });
      } catch (err) {
        console.log(err);
      }
    }
    queryUsers();
  }, []);

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
      api.put(`/users/${idUser}`, data).then((result) => {
        setBtnRegister("Feito!");
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Text>Alterar Usuário</Text>
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
          placeholder="Validade da Licença"
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

export default UpdateUser;
