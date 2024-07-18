import React, { useEffect } from "react";
import { handleEmotionIcon } from "utils/returnEmotion";

interface DiaryModalProps {
  diary: {
    id: number;
    content: string;
    emotion: string;
    createdAt: string;
  };
  onClose: () => void;
}

const DiaryModal: React.FC<DiaryModalProps> = ({ diary, onClose }) => {
  useEffect(() => {
    // 모달이 열리면 뒤쪽의 스크롤을 막음
    document.body.style.overflow = "hidden";
    // 컴포넌트가 언마운트될 때 스타일 제거하여 스크롤이 다시 활성화되도록 함
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 bg-black-black min-w-[700px]">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg">
        <img
          src={handleEmotionIcon(diary.emotion)}
          className="mb-2 border-8 border-white rounded-full w-28 shadow-emotionShadow bg-emotionBack"
        />
        <div className="font-['YangJin'] mb-6 text-[10px] text-black-500">
          {diary.createdAt}
        </div>
        <div className="mb-8 text-sm text-black-700">{diary.content}</div>
        <div
          className="cursor-pointer bg-[#8A8E99] text-white rounded-lg px-4 py-[10px]"
          onClick={onClose}
        >
          닫기
        </div>
      </div>
    </div>
  );
};

export default DiaryModal;
