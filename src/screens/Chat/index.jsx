import { useParams } from "react-router-dom";

import { ChatContextProvider } from "./contexts/chat.context";
import ChatForm from "./components/ChatForm";
import Chats from "./components/Chats";

const Chat = () => {
  const params = useParams();

  return (
    <ChatContextProvider name={params?.name}>
      <div className="queryWrapper">
        <ChatForm />
      </div>

      <div className="chatWrpper">
        <Chats />
      </div>
    </ChatContextProvider>
  );
};

export default Chat;
