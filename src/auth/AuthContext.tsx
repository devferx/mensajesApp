import { createContext, useCallback, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextProps {
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  verifyToken: () => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProvider {
  children: ReactNode;
}

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }: AuthProvider) => {
  const [auth, setAuth] = useState(initialState);

  const login = (email: string, password: string) => {};

  const register = (name: string, email: string, password: string) => {};

  const verifyToken = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        verifyToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
