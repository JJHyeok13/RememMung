import React from "react";

import styles from "./styles";
import { handleEmotionIcon } from "utils/returnEmotion";

interface PhotoContainerProps {
  diaryData: {
    id: number;
    content: string;
    emotion: string;
    createdAt: string;
  }[];
}

const DiaryContainer: React.FC<PhotoContainerProps> = ({ diaryData }) => {
  return (
    <styles.Container>
      {diaryData.map((diary) => (
        <styles.PhotoContainer key={diary.id}>
          <div>{diary.createdAt}</div>
          <img src={handleEmotionIcon(diary.emotion)} />
        </styles.PhotoContainer>
      ))}
    </styles.Container>
  );
};

export default DiaryContainer;
