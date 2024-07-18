import { DiaryItem } from "@pages/diaryPage/diaryPage";
import React from "react";

import { handleEmotionIcon } from "utils/returnEmotion";

interface DiaryContainerProps {
  diaryData: {
    id: number;
    content: string;
    emotion: string;
    createdAt: string;
  }[];
  onDiaryClick: (diary: DiaryItem) => void;
}

const DiaryContainer: React.FC<DiaryContainerProps> = ({
  diaryData,
  onDiaryClick,
}) => {
  return (
    <div className="grid grid-cols-6 grid-rows-2 place-items-center gap-x-12 gap-y-[72px] w-full mb-20">
      {diaryData.map((diary) => (
        <div
          className="flex flex-col items-center cursor-pointer"
          key={diary.id}
          onClick={() => onDiaryClick(diary)}
        >
          <div className="font-['YangJin'] text-black-500 text-[10px]">
            {diary.createdAt}
          </div>
          <img
            className="border-8 border-white rounded-full w-28 shadow-emotionShadow bg-emotionBack"
            src={handleEmotionIcon(diary.emotion)}
          />
        </div>
      ))}
    </div>
  );
};

export default DiaryContainer;
