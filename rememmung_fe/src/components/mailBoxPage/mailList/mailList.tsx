import React, { useState } from "react";

import DetailMail from "../detailMail/detailMail";

import styles from "./styles";
import { useRecoilValue } from "recoil";
import { petName } from "recoil/recoil";

interface MailListProps {
  mailData: {
    id: number;
    letterType: string;
    title: string;
    content: string;
    video?: string;
    createdAt: string;
  }[];
  isOpen: boolean;
  handleOpen: (letterId: number) => void;
  handleClose: () => void;
}

const MailList: React.FC<MailListProps> = ({
  mailData,
  isOpen,
  handleOpen,
  handleClose,
}) => {
  const petInfo = useRecoilValue(petName);
  const [selectedMail, setSelectedMail] = useState(null);

  const handleMailClick = (mail: any) => {
    setSelectedMail(mail);
    handleOpen(mail.id);
  };

  return (
    <>
      <styles.Table>
        <thead>
          <tr>
            <styles.TableHeader>제목</styles.TableHeader>
            <styles.TableHeader>보낸이</styles.TableHeader>
            <styles.TableHeader>날짜</styles.TableHeader>
          </tr>
        </thead>

        <tbody>
          {mailData.map((mail) => (
            <tr key={mail.id}>
              <styles.TitleData>
                <styles.Title onClick={() => handleMailClick(mail)}>
                  {mail.title}
                </styles.Title>
              </styles.TitleData>
              <styles.OtherData>{petInfo}</styles.OtherData>
              <styles.OtherData>{mail.createdAt}</styles.OtherData>
            </tr>
          ))}
        </tbody>
      </styles.Table>
      {isOpen && selectedMail && (
        <DetailMail detailData={selectedMail} handleClose={handleClose} />
      )}
    </>
  );
};

export default MailList;
