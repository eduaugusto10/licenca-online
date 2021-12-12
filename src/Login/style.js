import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #000;
`;

export const Text = styled.span`
  color: #F7941D;
  font-size: 2.4em;
  padding-bottom: 20px;
`;

export const Input = styled.input`
  margin: 10px;
  width: 250px;
  height: 35px;
  border-radius: 7px;
  padding-left: 7px;
`;

export const Button = styled.button`
  width: 125px;
  height: 35px;
  font-size: 18px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4d4d4d;
  margin: 50px;
  padding: 50px;
`;
