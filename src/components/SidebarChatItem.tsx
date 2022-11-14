import { useContext } from "react";

import { ChatContext } from "../context/chat/ChatContext";

import type { User } from "../interfaces";

interface SidebarChatItemProps {
  user: User;
}

export const SidebarChatItem = ({ user }: SidebarChatItemProps) => {
  const { chatState, dispatch } = useContext(ChatContext);
  const { activeChat } = chatState;

  const onClick = () => {
    dispatch({
      type: "[CHAT] ACTIVATE_CHAT",
      payload: user.uid,
    });
  };

  return (
    <div
      className={`chat_list ${user.uid === activeChat ? "active_chat" : ""} `}
      onClick={onClick}
    >
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{user.name}</h5>
          {user.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};
