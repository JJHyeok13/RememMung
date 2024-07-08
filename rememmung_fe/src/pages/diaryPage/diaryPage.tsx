import React from "react";

import RoundImage from "@assets/diaryPage/roundImage.svg";

import styles from "./styles";

const DiaryPage: React.FC = () => {
  return (
    <styles.Container>
      <styles.WhiteBox>
        <styles.Date>2024. 07. 07 (일)</styles.Date>
        <styles.Emotion src={RoundImage} />
        <styles.TextArea placeholder="오늘 하루에 대해 기록해주세요" />
      </styles.WhiteBox>
    </styles.Container>
  );
};

export default DiaryPage;
