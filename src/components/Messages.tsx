import { useContext } from "react";

import { ChatContext } from "../context/chat/ChatContext";
import { AuthContext } from "../auth/AuthContext";

import { OutgoingMessage } from "./OutgoingMessage";
import { SendMessage } from "./SendMessage";
import { IncomingMessage } from "./IncomingMessage";

export const Messages = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div id="messages" className="msg_history">
        {chatState.messages.map((msg) =>
          msg.to === auth.uid ? (
            <IncomingMessage key={`chat-${msg._id}`} message={msg} />
          ) : (
            <OutgoingMessage key={`chat-${msg._id}`} message={msg} />
          )
        )}
      </div>
      {/* <!-- Historia Fin --> */}

      <SendMessage />
    </div>
  );
};
