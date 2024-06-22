import React, { useEffect, useState } from "react";

import InputContainer from "@components/writeMailPage/inputContainer/inputContainer";
import SelectLetterStyle from "@components/writeMailPage/selectLetterStyle/selectLetterStyle";

import styles from "./styles";
import { writeLetter } from "@server/api/content/letter";

interface LetterDataProps {
  title: string;
  content: string;
}

const WriteMailPage: React.FC = () => {
  const [letterData, setLetterData] = useState<LetterDataProps>({
    title: "",
    content: "",
  });

  const handleTitle = (title: string) => {
    setLetterData((prev) => ({ ...prev, title }));
  };

  const handleContent = (content: string) => {
    setLetterData((prev) => ({ ...prev, content }));
  };

  useEffect(() => {
    console.log(letterData);
  }, [letterData]);

  const handleWrite = () => {
    writeLetter(letterData);
    console.log("편지 작성");
  };

  return (
    <styles.Container>
      <styles.ElementBox>
        <InputContainer
          letterData={letterData}
          handleTitle={handleTitle}
          handleContent={handleContent}
        />
        <styles.LowerContainer>
          <SelectLetterStyle />
          <styles.SendButton onClick={handleWrite}>보내기</styles.SendButton>
        </styles.LowerContainer>
      </styles.ElementBox>
    </styles.Container>
  );
};

export default WriteMailPage;
