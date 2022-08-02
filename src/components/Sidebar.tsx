import { SidebarChatItem } from "./SidebarChatItem";
export const Sidebar = () => {
  const chats = new Array(20).fill(0);
  return (
    <div className="inbox_chat">
      {chats.map((chat, idx) => (
        <SidebarChatItem key={idx} />
      ))}

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};
