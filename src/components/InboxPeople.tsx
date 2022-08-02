import { Sidebar } from "./Sidebar";
import { Searchbox } from "./Searchbox";

export const InboxPeople = () => {
  return (
    <div className="inbox_people">
      <Searchbox />
      <Sidebar />
    </div>
  );
};
