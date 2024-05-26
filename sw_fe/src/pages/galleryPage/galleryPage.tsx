import React, { useState } from "react";

import useBodyOverflowHidden from "../../hooks/useBodyOverflowHidden";

import styles from "./styles";
import PhotoContainer from "../../components/galleryPage/photoContainer/photoContainer";
import { dummyData } from "./dummyData";
import Pagination from "../../components/common/pagination/pagination";

const GalleryPage: React.FC = () => {
  useBodyOverflowHidden();

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
