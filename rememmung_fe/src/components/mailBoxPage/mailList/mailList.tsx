import React, { useState } from "react";

// import DetailMail from "../detailMail/detailMail";

import styles from "./styles";

interface MailListProps {
  isDeleteMode: boolean;
  mailData: {
    id: number;
    sourceId: number;
    from: string;
    sourceName: string;
    title: string;
    content: string;
    isRead: boolean;
    createdAt: string;
  }[];
}

const MailList: React.FC<MailListProps> = ({ isDeleteMode, mailData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <styles.Table>
        <thead>
          <tr>
            <styles.TableHeader></styles.TableHeader>
            <styles.TableHeader>제목</styles.TableHeader>
            <styles.TableHeader>보낸이</styles.TableHeader>
            <styles.TableHeader>날짜</styles.TableHeader>
          </tr>
        </thead>

        {mailData.map((mail) => (
          <tbody key={mail.id}>
            <tr>
              <styles.CheckBox>
                <styles.StyleInput
                  type="checkbox"
                  isDeleteMode={isDeleteMode}
                />
              </styles.CheckBox>
              <styles.TitleData>
                <styles.Title onClick={handleClick}>{mail.title}</styles.Title>
              </styles.TitleData>
              <styles.OtherData>{mail.from}</styles.OtherData>
              <styles.OtherData>{mail.createdAt}</styles.OtherData>
            </tr>
          </tbody>
        ))}
      </styles.Table>

      {/* {isOpen && (
        <DetailMail detailData={content} handleClose={handleClose} />
      )} */}
    </>
  );
};

export default MailList;
