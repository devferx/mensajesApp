import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/AuthContext";
import { SocketProvider } from "./auth/SocketContext";

export const ChatApp = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthProvider>
  );
};
