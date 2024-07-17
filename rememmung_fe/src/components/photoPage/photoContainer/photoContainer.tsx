import React, { useState } from "react";

import styles from "./styles";

interface PhotoContainerProps {
  photoData: {
    id: number;
    petId: number;
    attachment: {
      id: number;
      type: string;
      url: string;
      createdAt: string;
    };
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
    <div className="grid items-center w-full grid-cols-5 gap-8 mb-12 place-items-center">
      {photoData.map((photo, index) => (
        <styles.PhotoContainer
          key={photo.id}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredIndex === index && (
            <styles.HoveredData>
              <styles.Title>{photo.attachment.createdAt}</styles.Title>
            </styles.HoveredData>
          )}
          <styles.Photo src={photo.attachment.url} />
        </styles.PhotoContainer>
      ))}
    </div>
  );
};

export default PhotoContainer;
