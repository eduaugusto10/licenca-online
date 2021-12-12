import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #000;
`;
export const Div = styled.div`
  width: 400px;
  margin: 20px;
  background-color: #4d4d4d;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.span`
  color: #F7941D;
  font-size: 2em;
`;

export const Input = styled.input`
  height: 30px;
  width: 280px;
  margin: 7px;
  border-radius: 5px;
  padding-left: 8px;
`;

export const Button = styled.button`
  height: 30px;
  width: 150px;
  font-size: 1em;
  border-radius: 5px;
  margin: 7px;
`;
