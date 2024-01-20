import React from "react";
import { ChatContext } from "../contexts/chat.context";

export const useChatContext = () => {
  return React.useContext(ChatContext);
};
