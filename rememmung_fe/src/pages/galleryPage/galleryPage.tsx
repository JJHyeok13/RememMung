import React, { useState } from "react";

import PhotoContainer from "@components/galleryPage/photoContainer/photoContainer";
import Pagination from "@components/common/pagination/pagination";

import styles from "./styles";
import { dummyData } from "./dummyData";

const GalleryPage: React.FC = () => {
  const [photoData, setPhotoData] = useState(dummyData);

  return (
    <styles.Container>
      <styles.WhiteBox>
        <PhotoContainer photoData={photoData} />
        <Pagination />
      </styles.WhiteBox>
    </styles.Container>
  );
};

export default GalleryPage;
