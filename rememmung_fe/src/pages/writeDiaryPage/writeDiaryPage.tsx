import SelectEmotionModal from "@components/diaryPage/selectEmotionModal";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { diaryDataState } from "recoil/recoil";

import { handleEmotionIcon } from "utils/returnEmotion";

interface DiaryDataProps {
  id: number;
  emotion: string;
  content: string;
  createdAt: string;
}

const WriteDiaryPage: React.FC = () => {
  const navigate = useNavigate();
  const [diaryStateData, setDiaryData] = useRecoilState(diaryDataState);
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    const getFormattedDate = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
      const dayName = dayNames[date.getDay()];

      return `${year}. ${month}. ${day} (${dayName})`;
    };

    setToday(getFormattedDate());
  }, []);

  const [diaryData, setDiaryDataState] = useState({
    emotion: "",
    content: "",
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isActive = diaryData.content !== "" && diaryData.emotion !== "";

  const handleEmotionSelect = (emotion: string) => {
    setDiaryDataState((prev) => ({ ...prev, emotion }));
    handleCloseModal();
  };

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDiaryDataState((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleWrite = () => {
    if (isActive) {
      const newDiary: DiaryDataProps = {
        id: diaryStateData.length + 1,
        content: diaryData.content,
        emotion: diaryData.emotion,
        createdAt: today,
      };
      setDiaryData((prevData) => [newDiary, ...prevData]);
      navigate("/diary");
    }
  };
  return (
    <div className="w-5/6 mx-auto bg-[#f6f6f8] flex flex-col items-center h-2/3 py-8 px-6 rounded-xl">
      <div className="font-['YangJin'] font-normal text-[#37393d] text-lg mb-6">
        {today}
      </div>
      <img
        className="w-[140px] h-[140px] cursor-pointer mb-10"
        src={handleEmotionIcon(diaryData.emotion)}
        onClick={handleOpenModal}
      />
      <textarea
        className="px-4 py-3 resize-none bg-white text-[#7B7B7B] h-full rounded-xl mb-4 w-full"
        placeholder="오늘 하루에 대해 얘기해주세요!"
        value={diaryData.content}
        onChange={handleContent}
      />
      <div
        className={`${isActive ? "bg-brown-500" : "bg-black-300"}
        cursor-pointer px-6 py-2 text-white rounded-xl ml-auto`}
        onClick={isActive ? handleWrite : undefined}
      >
        일기쓰기
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-modalBack"
          onClick={handleCloseModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <SelectEmotionModal onSelectEmotion={handleEmotionSelect} />
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteDiaryPage;
