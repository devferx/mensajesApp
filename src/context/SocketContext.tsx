import { createContext, useEffect, useContext } from "react";
import type { ReactNode } from "react";
import type { Socket } from "socket.io-client";

import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "./chat/ChatContext";
import { useSocket } from "../hooks/useSocket";

import type { Message, User } from "../interfaces/index";
import {
  scrollToBottom,
  scrollToBottomAnimated,
} from "../helpers/scrollToBottom";

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
  const { dispatch } = useContext(ChatContext);

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

  useEffect(() => {
    socket?.on("user-list", (users: User[]) => {
      dispatch({
        type: "[CHAT] USERS_LOADED",
        payload: users,
      });
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("private-message", (message: Message) => {
      dispatch({
        type: "[CHAT] NEW_MESSAGE",
        payload: message,
      });

      scrollToBottomAnimated("messages");
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
