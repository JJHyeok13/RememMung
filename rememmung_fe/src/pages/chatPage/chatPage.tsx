import React from "react";

import ChattingInput from "@components/chatPage/chattingInput/chattingInput";

import styles from "./styles";
import ChatComponent from "@components/chatPage/chatting/chatting";

const ChatPage: React.FC = () => {
  return (
    <styles.Container>
      <styles.WhiteBox>
        <ChatComponent />
        <ChattingInput />
      </styles.WhiteBox>
    </styles.Container>
  );
};

export default ChatPage;
