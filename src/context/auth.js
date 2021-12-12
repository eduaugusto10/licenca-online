import React, { createContext, useState } from "react";

const AuthContext = createContext({
  signed: false,
  user: {},
  signIn: {},
  idUser: {},
  setIDUser: {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [idUser, setIDUser] = useState();

  async function signIn(token) {
    setUser(token);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        idUser,
        setIDUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
