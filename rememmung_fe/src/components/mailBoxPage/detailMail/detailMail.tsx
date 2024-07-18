import React, { KeyboardEvent, useEffect, useRef } from "react";

import styles from "./styles";
import { useRecoilValue } from "recoil";
import { petName } from "recoil/recoil";

interface DetailMailProps {
  detailData: {
    id: number;
    letterType: string;
    title: string;
    content: string;
    createdAt: string;
  };
  handleClose: () => void;
}

const DetailMail: React.FC<DetailMailProps> = ({ detailData, handleClose }) => {
  const petInfo = useRecoilValue(petName);
  const letterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleESC = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    const handleKeyDown = (e: Event) =>
      handleESC(e as unknown as KeyboardEvent);

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        letterRef.current &&
        !letterRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);

  return (
    <>
      <styles.Background>
        <styles.Letter letterType={detailData.letterType} ref={letterRef}>
          <styles.Content>
            <styles.Receiver>눈나에게</styles.Receiver>
            <div>{detailData.content}</div>
            <styles.Sender>{petInfo}가</styles.Sender>
          </styles.Content>
        </styles.Letter>
        {/* <styles.Button onClick={handleClose}>닫기</styles.Button> */}
      </styles.Background>
    </>
  );
};

export default DetailMail;
