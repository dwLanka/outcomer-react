import React from "react";
import ChatItem from "../ChatItem";
import { ChatItemType } from "../../constants/chat.constants";
import { useChatContext } from "../../hooks/useChatContext";

const Chats = () => {
  const { chats } = useChatContext();

  return (
    <>
      {chats.map((item, i) => {
        if (item.type === ChatItemType.user) {
          return (
            <ChatItem
              key={i}
              type={ChatItemType.user}
              message={item?.question}
            />
          );
        }

        return (
          <ChatItem key={i} type={ChatItemType.bot} message={item?.answer} />
        );
      })}
    </>
  );
};

export default Chats;
