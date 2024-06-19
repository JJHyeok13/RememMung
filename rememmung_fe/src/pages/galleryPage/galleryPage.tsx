import React, {
  //useEffect,
  useState,
} from "react";

import PhotoContainer from "@components/galleryPage/photoContainer/photoContainer";
import Pagination from "@components/common/pagination/pagination";

import styles from "./styles";
import { dummyData } from "./dummyData";
// import { getPetFile } from "@server/api/pet_attachment";
import { PhotoDataProps } from "type/galleryPage/galleryPage";

const GalleryPage: React.FC = () => {
  const [photoData, setPhotoData] = useState<PhotoDataProps>(dummyData);
  const [page, setPage] = useState<number>(0);
  const pageSize = 10;

  const handlePage = (num: number) => {
    setPage(num);
  };

  // useEffect(() => {
  //   getPetFile(page, pageSize).then((res) => setPhotoData(res));
  // }, [photoData]);

  return (
    <styles.Container>
      <styles.WhiteBox>
        <PhotoContainer photoData={photoData.nodes} />
        <Pagination page={page} handlePage={handlePage} />
      </styles.WhiteBox>
    </styles.Container>
  );
};

export default GalleryPage;
