import { createContext, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";

import { chatReducer, ChatAction } from "./chatReducer";

export interface ChatState {
  uid: string;
  activeChat: string | null;
  users: any[];
  messages: any[];
}

const initialState: ChatState = {
  uid: "",
  activeChat: null, // UID of user to whom the user is talking
  users: [], // All users in the database
  messages: [], // Messages of the active chat
};

interface ChatContextProps {
  chatState: ChatState;
  dispatch: Dispatch<ChatAction>;
}

export const ChatContext = createContext({} as ChatContextProps);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider
      value={{
        chatState,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
