import { Message } from "../interfaces";

interface IncomingMessageProps {
  message: Message;
}

export const IncomingMessage = ({ message }: IncomingMessageProps) => {
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{message.message}</p>
          <span className="time_date"> 11:01 AM | June 9</span>
        </div>
      </div>
    </div>
  );
};
