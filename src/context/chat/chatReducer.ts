import { Message, User } from "../../interfaces";
import { ChatState } from "./ChatContext";

export type ChatAction =
  | { type: "[CHAT] USERS_LOADED"; payload: User[] }
  | { type: "[CHAT] ACTIVATE_CHAT"; payload: string }
  | { type: "[CHAT] NEW_MESSAGE"; payload: Message };

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
    case "[CHAT] NEW_MESSAGE":
      if (
        state.activeChat === action.payload.from ||
        state.activeChat === action.payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
