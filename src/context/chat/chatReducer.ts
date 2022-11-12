import { ChatState } from "./ChatContext";

export type ChatAction = { type: "" };

export function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    default:
      return state;
  }
}
