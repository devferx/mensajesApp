import { useContext, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import { SocketContext } from "../context/SocketContext";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";

export const SendMessage = () => {
  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const [message, setMessage] = useState("");

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMessage(target.value);
  };
  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (message.length === 0) return;

    setMessage("");

    socket?.emit("private-message", {
      from: auth.uid,
      to: chatState.activeChat,
      message,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            type="text"
            className="write_msg"
            placeholder="Mensaje..."
            value={message}
            onChange={onChange}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};
