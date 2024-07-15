import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import SelectLetterStyle from "@components/writeMailPage/selectLetterStyle";

import { writeLetter } from "@server/content/api/letter";

interface LetterDataProps {
  title: string;
  content: string;
}

const WriteMailPage: React.FC = () => {
  const navigate = useNavigate();

  const [letterStyle, setLetterStyle] = useState<string>("");

  const handleLetterStyle = (type: string) => {
    setLetterStyle(type);
  };

  const [letterData, setLetterData] = useState<LetterDataProps>({
    title: "",
    content: "",
  });

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setLetterData((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLetterData((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleWrite = () => {
    writeLetter(letterData);
    navigate("/mailbox");
  };

  return (
    <div className="w-5/6 mx-auto bg-[#f6f6f8] flex flex-col items-center h-2/3 py-8 pl-6 pr-4 rounded-xl">
      <input
        type="text"
        placeholder="제목"
        className="px-4 py-3 mb-3 bg-white text-[#7B7B7B] rounded-xl w-full"
        value={letterData.title}
        onChange={handleTitle}
      />
      <textarea
        placeholder="내용"
        className="px-4 py-3 resize-none bg-white text-[#7B7B7B] h-full rounded-xl mb-4 w-full"
        value={letterData.content}
        onChange={handleContent}
      />
      <div className="flex flex-row justify-between items-center w-full">
        <SelectLetterStyle
          letterStyle={letterStyle}
          handleLetterStyle={handleLetterStyle}
        />
        <div
          className="cursor-pointer px-6 py-2 bg-brown-500 text-white rounded-xl"
          onClick={handleWrite}
        >
          편지쓰기
        </div>
      </div>
    </div>
  );
};

export default WriteMailPage;
