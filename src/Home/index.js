import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import AuthContext from "../context/auth";
import api from "../services/api";
import {
  Container,
  Box,
  Title,
  Button,
  Text,
  List,
  ContentList,
  CircleButton,
} from "./style";

export function Home() {
  const history = useNavigate();
  const { setIDUser } = useContext(AuthContext);
  const [users, setUsers] = useState();

  useEffect(() => {
    async function queryUsers() {
      try {
        api.get("/users").then((result) => {
          setUsers(result.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
    queryUsers();
  }, []);

  function Redirect(e) {
    setIDUser(e);
    history("/update");
  }

  return (
    <Container>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Title style={{ color: "#F7941D", paddingLeft: "40px" }}>
          Clientes
        </Title>
        <Button
          onClick={() => history("/register")}
          style={{ marginRight: "20px" }}
        >
          Cadastrar
        </Button>
      </Box>
      <div style={{ textAlign: "center", backgroundColor: "#000" }}>
        {users &&
          users.map((user, index) => (
            <List key={index}>
              <ContentList>
                <Text>{user.id} </Text>
                <br />
                ID
              </ContentList>
              <ContentList>
                <Text>{user.account} </Text>
                <br />
                Nº Conta
              </ContentList>
              <ContentList>
                <Text>{user.name}</Text>
                <br />
                Nome
              </ContentList>
              <ContentList>
                <Text>{user.email}</Text>
                <br />
                E-mail
              </ContentList>
              <ContentList>
                <Text>{user.plan}</Text>
                <br />
                Plano
              </ContentList>
              <ContentList>
                <Text>{format(new Date(user.license_validate), "yyyy-MM-dd")}</Text>
                <br />
                Validade
              </ContentList>
              <ContentList>
                <Text>{user.broker}</Text>
                <br />
                Corretora
              </ContentList>
              <ContentList>
                <CircleButton onClick={() => Redirect(user.id)}>
                  Alterar
                </CircleButton>
              </ContentList>
            </List>
          ))}
      </div>
    </Container>
  );
}

export default Home;
