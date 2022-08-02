import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ChatPage } from "../pages/ChatPage";
import { AuthPage } from "../pages/AuthPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="auth" element={<AuthPage />}>
          <Route path="" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
