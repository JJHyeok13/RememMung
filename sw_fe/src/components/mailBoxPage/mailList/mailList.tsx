import React from "react";

import styles from "./styles";

interface MailListProps {
  mailData: {
    title: string;
    writer: string;
    createdAt: string;
  }[];
}

const MailList: React.FC<MailListProps> = ({ mailData }) => {
  return (
    <styles.Table>
      <tr>
        <styles.TableHeader>제목</styles.TableHeader>
        <styles.TableHeader>보낸이</styles.TableHeader>
        <styles.TableHeader>날짜</styles.TableHeader>
      </tr>

      {mailData.map((mail, index) => (
        <tr key={index}>
          <styles.TitleData>{mail.title}</styles.TitleData>
          <styles.OtherData>{mail.writer}</styles.OtherData>
          <styles.OtherData>{mail.createdAt}</styles.OtherData>
        </tr>
      ))}
    </styles.Table>
  );
};

export default MailList;
