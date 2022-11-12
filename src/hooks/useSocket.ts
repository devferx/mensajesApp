import { useEffect, useState, useCallback } from "react";
import { connect } from "socket.io-client";
import type { Socket } from "socket.io-client";

export const useSocket = (serverPath: string) => {
  const [socket, setSocket] = useState<Socket>();
  const [online, setOnline] = useState(false);

  const connectSocket = useCallback(() => {
    const token = localStorage.getItem("token");

    const socketTemp = connect(serverPath, {
      transports: ["websocket"],
      autoConnect: true,
      forceNew: true,
      query: {
        "x-token": token,
      },
    });

    setSocket(socketTemp);
  }, [serverPath]);

  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    setOnline(socket?.connected || false);
  }, [socket]);

  useEffect(() => {
    socket?.on("connect", () => {
      setOnline(true);
    });

    return () => {
      socket?.off();
    };
  }, [socket]);

  useEffect(() => {
    socket?.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
    connectSocket,
    disconnectSocket,
  };
};
