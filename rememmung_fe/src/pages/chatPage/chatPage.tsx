import React from "react";

import ChatComponent from "@components/chatPage/chatting/chatting";
import ChattingInput from "@components/chatPage/chattingInput/chattingInput";

import styles from "./styles";

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
