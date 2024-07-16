import React, { useState } from "react";

import styles from "./styles";

interface PhotoContainerProps {
  diaryData: {
    id: number;
    petId: number;
    content: string;
    emotion: string;
    attachment: {
      id: number;
      type: string;
      url: string;
      createdAt: string;
    };
  }[];
}

const DiaryContainer: React.FC<PhotoContainerProps> = ({ diaryData }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <styles.Container>
      {diaryData.map((diary, index) => (
        <styles.PhotoContainer
          key={diary.id}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredIndex === index && (
            <styles.HoveredData>
              <styles.Title>{diary.attachment.createdAt}</styles.Title>
            </styles.HoveredData>
          )}
          <styles.Photo src={diary.attachment.url} />
        </styles.PhotoContainer>
      ))}
    </styles.Container>
  );
};

export default DiaryContainer;
