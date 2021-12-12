import React, { useContext } from "react";
import AuthContext from "../context/auth";
import Login from "../Login";
import Home from "../Home";
import Register from "../Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUser from "../UpdateUser";

const PrivateHome = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <Home /> : <Login />;
};

const PrivateRegister = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <Register /> : <Login />;
};
const PrivateUpdate = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <UpdateUser /> : <Login />;
};

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<PrivateHome />} />
      <Route path="/register" element={<PrivateRegister />} />
      <Route path="/update" element={<PrivateUpdate />} />
      <Route exact path="/" element={<PrivateHome />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
