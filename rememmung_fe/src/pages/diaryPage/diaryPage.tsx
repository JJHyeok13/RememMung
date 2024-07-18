import Pagination from "@components/common/pagination/pagination";
import DiaryContainer from "@components/diaryPage/diaryContainer/diaryContainer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyData } from "./dummyData";

export interface DiaryDataProps {
  totalCount: number;
  totalPage: number;
  nodes: {
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

const DiaryPage: React.FC = () => {
  const navigate = useNavigate();

  // @ts-ignore
  const [diaryData, setDiaryData] = useState(dummyData);

  const [currentPage, setCurrentPage] = useState<number>(1);
  // @ts-ignore
  const pageSize = 12;

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  const handleWrite = () => {
    navigate(`/writediary`);
  };

  return (
    <>
      <div className="w-5/6 mx-auto bg-[#f6f6f8] flex flex-col items-center justify-center h-2/3 py-8 pl-6 pr-4 rounded-xl">
        {diaryData && diaryData.nodes.length > 0 ? (
          <>
            <DiaryContainer diaryData={diaryData.nodes} />
            <Pagination
              currentPage={currentPage}
              handlePage={handlePage}
              totalPage={diaryData.totalPage}
            />
          </>
        ) : (
          <div className="text-[#939393] text-center">
            데이터가 존재하지 않습니다.
          </div>
        )}
      </div>
      <div className="flex justify-end w-5/6 mx-auto mt-4">
        <div
          className="px-4 py-2 text-white rounded-lg cursor-pointer bg-brown-500"
          onClick={handleWrite}
        >
          일기쓰기
        </div>
      </div>
    </>
  );
};

export default DiaryPage;
