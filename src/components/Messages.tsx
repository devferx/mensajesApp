import { OutgoingMessage } from "./OutgoingMessage";
import { SendMessage } from "./SendMessage";
import { IncomingMessage } from "./IncomingMessage";
import { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { AuthContext } from "../auth/AuthContext";

export const Messages = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history">
        {chatState.messages.map((msg) =>
          msg.to === auth.uid ? (
            <IncomingMessage key={`chat-${msg._id}`} message={msg} />
          ) : (
            <OutgoingMessage key={`chat-${msg._id}`} message={msg} />
          )
        )}
        {/* <!-- Mensaje recibido Inicio --> */}

        {/* <!-- Mensaje recibido Fin --> */}

        {/* <!-- Mensaje enviado inicio --> */}

        {/* <!-- Mensaje enviado inicio --> */}
      </div>
      {/* <!-- Historia Fin --> */}

      {/* <!-- Enviar mensaje Inicio --> */}
      <SendMessage />
      {/* <!-- Enviar mensaje Fin --> */}
    </div>
  );
};
