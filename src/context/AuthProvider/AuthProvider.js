import React, { createContext } from "react";
import useFirebase from "../../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // get Firebase
  const allFirebase = useFirebase();

  return (
    <AuthContext.Provider value={allFirebase}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
