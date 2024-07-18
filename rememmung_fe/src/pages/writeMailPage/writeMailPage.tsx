import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import SelectLetterStyle from "@components/writeMailPage/selectLetterStyle";
import { useRecoilState } from "recoil";
import { mailDataState } from "recoil/recoil";

// import { writeLetter } from "@server/content/api/letter";

import Video from "@assets/mailBoxPage/video.mp4";

interface LetterDataProps {
  id: number;
  title: string;
  content: string;
  video?: string;
  letterType: string;
  createdAt: string;
}

const WriteMailPage: React.FC = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const [mail, setMail] = useRecoilState(mailDataState);
  // const [today, setToday] = useState<string>("");

  // useEffect(() => {
  //   const getFormattedDate = () => {
  //     const date = new Date();
  //     const year = date.getFullYear();
  //     const month = String(date.getMonth() + 1).padStart(2, "0");
  //     const day = String(date.getDate()).padStart(2, "0");
  //     const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  //     const dayName = dayNames[date.getDay()];

  //     return `${year}. ${month}. ${day} (${dayName})`;
  //   };

  //   setToday(getFormattedDate());
  // }, []);

  const [letterStyle, setLetterStyle] = useState<string>("");

  const handleLetterStyle = (type: string) => {
    setLetterStyle(type);
  };

  const [letterData, setLetterData] = useState({
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
    const newMail: LetterDataProps = {
      id: 2,
      title: letterData.title,
      content: letterData.content,
      letterType: letterStyle,
      createdAt: "방금 전",
    };
    const newVideoMail: LetterDataProps = {
      id: 1,
      title: "누나 안녕!",
      content:
        "누나 잘 지내고 있어? 난 오늘 산책 다녀와써! 날씨가 엄청 좋더라~ 누나랑 같이 공원 산책했던 날이 기억나더라구~ 난 잘 지내고 있으니까 걱정마 누나~! 누나도 삶이 지칠 때, 꼭 산책해!",
      letterType: "purple",
      video: Video,
      createdAt: "방금 전",
    };
    setMail((prevData) => [newVideoMail, newMail, ...prevData]);

    // writeLetter(letterData);
    navigate("/mailbox");
  };

  return (
    <div className="w-5/6 mx-auto bg-[#f6f6f8] flex flex-col items-center h-2/3 py-8 px-6 rounded-xl">
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
      <div className="flex flex-row items-center justify-between w-full">
        <SelectLetterStyle
          letterStyle={letterStyle}
          handleLetterStyle={handleLetterStyle}
        />
        <div
          className="px-6 py-2 text-white cursor-pointer bg-brown-500 rounded-xl"
          onClick={handleWrite}
        >
          편지쓰기
        </div>
      </div>
    </div>
  );
};

export default WriteMailPage;
