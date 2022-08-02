import { OutgoingMessage } from "./OutgoingMessage";
import { SendMessage } from "./SendMessage";
import { IncomingMessage } from "./IncomingMessage";

export const Messages = () => {
  const msgs = new Array(10).fill(1);
  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history">
        {msgs.map((msg, idx) =>
          idx % 2 ? (
            <IncomingMessage key={`chat-${idx}`} />
          ) : (
            <OutgoingMessage key={`chat-${idx}`} />
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
