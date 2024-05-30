import React from "react";

import useBodyOverflowHidden from "@hooks/useBodyOverflowHidden";

import ChattingInput from "@components/mainPage/chattingInput/chattingInput";

import styles from "./styles";

const ChatPage: React.FC = () => {
  // 스크롤 방지 Custom Hooks
  useBodyOverflowHidden();

  return (
    <styles.Container>
      <styles.WhiteBox>
        <ChattingInput />
      </styles.WhiteBox>
    </styles.Container>
  );
};

export default ChatPage;
