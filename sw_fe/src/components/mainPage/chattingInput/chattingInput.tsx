import React from "react";

import SendButtonImage from "../../../assets/mainPage/sendButton.svg";

import styles from "./styles";

const ChattingInput: React.FC = () => {
  return (
    <styles.Container>
      <styles.StyleInput type="text" placeholder="브리에게 말을 걸어봐요!" />
      <styles.SendButton src={SendButtonImage} alt="전송 버튼" />
    </styles.Container>
  );
};

export default ChattingInput;
