import React, { useEffect, useState } from "react";

import PhotoContainer from "@components/galleryPage/photoContainer/photoContainer";
import Pagination from "@components/common/pagination/pagination";

import { getPetFile } from "@server/content/api/pet_attachment";

import { PhotoDataProps } from "type/galleryPage/galleryPage";
import { dummyData } from "./dummyData";

const GalleryPage: React.FC = () => {
  // @ts-ignore
  const [photoData, setPhotoData] = useState<PhotoDataProps>(dummyData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  // useEffect(() => {
  //   getPetFile(currentPage, pageSize).then((res) => setPhotoData(res));
  // }, []);

  return (
    <div className="w-5/6 mx-auto bg-[#f6f6f8] flex flex-col items-center justify-center h-2/3 py-8 pl-6 pr-4 rounded-xl">
      {photoData && photoData.nodes.length > 0 ? (
        <>
          <PhotoContainer photoData={photoData.nodes} />
          <Pagination
            currentPage={currentPage}
            handlePage={handlePage}
            totalPage={photoData.totalPage}
          />
        </>
      ) : (
        <div className="text-[#939393] text-center">
          데이터가 존재하지 않습니다.
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
