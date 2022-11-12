import { createContext, useEffect, useContext } from "react";
import type { ReactNode } from "react";
import type { Socket } from "socket.io-client";

import { useSocket } from "../hooks/useSocket";
import { AuthContext } from "./AuthContext";

interface SocketContextProps {
  socket: Socket | undefined;
  online: boolean;
}

export const SocketContext = createContext({} as SocketContextProps);

interface SocketProviderProps {
  children: ReactNode;
}
export const SocketProvider = ({ children }: SocketProviderProps) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    "http://localhost:3001"
  );
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.logged) {
      connectSocket();
    }
  }, [auth, connectSocket]);

  useEffect(() => {
    if (!auth.logged) {
      disconnectSocket();
    }
  }, [auth, disconnectSocket]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
