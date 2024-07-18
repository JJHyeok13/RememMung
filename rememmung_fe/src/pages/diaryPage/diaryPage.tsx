import Pagination from "@components/common/pagination/pagination";
import DiaryContainer from "@components/diaryPage/diaryContainer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryModal from "@components/diaryPage/diaryModal";
import { useRecoilValue } from "recoil";
import { diaryDataState } from "recoil/recoil";

export interface DiaryItem {
  id: number;
  content: string;
  emotion: string;
  createdAt: string;
}

const DiaryPage: React.FC = () => {
  const navigate = useNavigate();

  const diaryData = useRecoilValue(diaryDataState);
  const totalPage = 1;

  const [currentPage, setCurrentPage] = useState<number>(1);
  // @ts-ignore
  const pageSize = 12;

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  const handleWrite = () => {
    navigate(`/writediary`);
  };

  const [selectedDiary, setSelectedDiary] = useState<DiaryItem | null>(null);

  const handleDiaryClick = (diary: DiaryItem) => {
    setSelectedDiary(diary);
  };

  const handleCloseModal = () => {
    setSelectedDiary(null);
  };

  return (
    <>
      <div className="w-5/6 mx-auto bg-[#f6f6f8] flex flex-col items-center justify-center h-2/3 py-8 pl-6 pr-4 rounded-xl">
        {diaryData && diaryData.length > 0 ? (
          <>
            <DiaryContainer
              diaryData={diaryData}
              onDiaryClick={handleDiaryClick}
            />
            <Pagination
              currentPage={currentPage}
              handlePage={handlePage}
              totalPage={totalPage}
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

      {selectedDiary && (
        <DiaryModal diary={selectedDiary} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default DiaryPage;
