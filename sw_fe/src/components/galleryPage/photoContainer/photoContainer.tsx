import React, { useState } from "react";

import styles from "./styles";

interface PhotoContainerProps {
  photoData: {
    id: number;
    url: string;
    title: string;
    content: string;
  }[];
}

const PhotoContainer: React.FC<PhotoContainerProps> = ({ photoData }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <styles.Container>
      {photoData.map((photo, index) => (
        <styles.PhotoContainer
          key={photo.id}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredIndex === index && (
            <styles.HoveredData>
              <styles.Title>{photo.title}</styles.Title>
              <styles.Content>{photo.content}</styles.Content>
            </styles.HoveredData>
          )}
          <styles.Photo src={photo.url} />
        </styles.PhotoContainer>
      ))}
    </styles.Container>
  );
};

export default PhotoContainer;
