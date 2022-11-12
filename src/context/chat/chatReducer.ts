import { User } from "../../interfaces";
import { ChatState } from "./ChatContext";

export type ChatAction = { type: "[CHAT] USERS_LOADED"; payload: User[] };

export function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "[CHAT] USERS_LOADED": {
      return {
        ...state,
        users: [...action.payload],
      };
    }
    default:
      return state;
  }
}
