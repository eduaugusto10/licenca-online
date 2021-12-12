import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  height: 100vh;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 78% 20%;
  grid-gap: 10px;
  background-color: #edf0f4;
  padding: 10px;
`;

export const Box = styled.div`
  background-color: #000;
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
`;

export const Title = styled.text`
  color: #245ca0;
  font-size: 28px;
`;
export const Text = styled.text`
  color: #245ca0;
  font-size: 18px;
`;
export const Title2 = styled.text`
  color: #0000004d;
  font-size: 22px;
`;

export const SignInButton = styled.button`
  width: 168px;
  heigth: 37px;
  background-color: #245ca0;
  color: #ffffff;
  border-radius: 30px;
  font-size: 20px;
  margin-left: 56px;
  margin-right: 67px;
`;

export const Input = styled.input`
  width: 361px;
  height: 41px;
  border-radius: 10px;
  color: #00000066;
  font-size: 18px;
  padding-left: 15px;
  margin-right: 40px;
`;

export const Button = styled.button`
  width: 168px;
  height: 37px;
  background-color: #245ca0;
  color: #ffffff;
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
`;

export const CircleButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #245ca0;
  color: #ffffff;
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
`;

export const ImageLogo = styled.img`
  margin-top: 25;
  margin: 25;
  width: 15px;
  height: 15px;
`;

export const List = styled.li`
  display: grid;
  grid-template-columns: 5% 7% 20% 20% 10% 10% 10% 5%;
  grid-gap: 10px;
  background-color: #edf0f4;
  padding: 10px;
  height: 60px;
  margin: 10px;
`;

export const ContentList = styled.div`
  margin: 10px;
`;
