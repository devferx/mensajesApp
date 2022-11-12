import { Route, Routes } from "react-router-dom";

import { AuthPage, LoginPage, RegisterPage } from "../pages";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="" element={<AuthPage />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
