import React from "react";

import styles from "./styles";
import InputContainer from "../../components/writeMailPage/inputContainer/inputContainer";
import SelectLetterStyle from "../../components/writeMailPage/selectLetterStyle/selectLetterStyle";

const WriteMailPage: React.FC = () => {
  return (
    <styles.Container>
      <styles.ElementBox>
        <InputContainer />
        <styles.LowerContainer>
          <SelectLetterStyle />
          <styles.SendButton>보내기</styles.SendButton>
        </styles.LowerContainer>
      </styles.ElementBox>
    </styles.Container>
  );
};

export default WriteMailPage;
