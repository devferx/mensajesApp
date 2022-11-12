import React from "react";
import ReactDOM from "react-dom/client";

import { ChatApp } from "./ChatApp";
import "./index.css";
import "./css/login-register.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ChatApp />
  // </React.StrictMode>
);
