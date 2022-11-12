import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChatPage } from "../pages/ChatPage";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  const { auth, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (auth.checking) {
    return <h1>Wait please</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute isAuthenticated={auth.logged}>
              <ChatPage />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/*"
          element={
            <PrivateRoute isAuthenticated={auth.logged}>
              <AuthRouter />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};
