import { formatDateMessage } from "../helpers/formatDateMessage";
import { Message } from "../interfaces";

interface OutgoingMessageProps {
  message: Message;
}

export const OutgoingMessage = ({ message }: OutgoingMessageProps) => {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{message.message}</p>
        <span className="time_date">
          {formatDateMessage(message.createdAt)}
        </span>
      </div>
    </div>
  );
};
