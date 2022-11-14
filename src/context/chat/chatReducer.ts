import { User } from "../../interfaces";
import { ChatState } from "./ChatContext";

export type ChatAction =
  | { type: "[CHAT] USERS_LOADED"; payload: User[] }
  | { type: "[CHAT] ACTIVATE_CHAT"; payload: string };

export function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "[CHAT] USERS_LOADED":
      return {
        ...state,
        users: [...action.payload],
      };
    case "[CHAT] ACTIVATE_CHAT":
      if (state.activeChat === action.payload) return state;

      return {
        ...state,
        activeChat: action.payload,
        messages: [],
      };
    default:
      return state;
  }
}
