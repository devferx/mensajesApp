import { createContext, useCallback, useState } from "react";
import type { ReactNode } from "react";

import { fetchWithoutToken, baseURL } from "../helpers/fetch";
import { LoginResponse } from "../interfaces";

interface AuthContextProps {
  auth: AuthState;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => void;
  verifyToken: () => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProvider {
  children: ReactNode;
}

interface AuthState {
  uid: null | string;
  checking: boolean;
  logged: boolean;
  name: null | string;
  email: null | string;
}

const initialState: AuthState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }: AuthProvider) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await fetchWithoutToken.post<LoginResponse>("/login", {
        email,
        password,
      });

      if (data.ok) {
        localStorage.setItem("token", data.token);
        const { user } = data;

        setAuth({
          uid: user.uid,
          checking: false,
          logged: true,
          name: user.name,
          email: user.email,
        });
      }

      return data.ok;
    } catch (error) {
      return false;
    }
  };

  const register = (name: string, email: string, password: string) => {};

  const verifyToken = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        auth,
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
