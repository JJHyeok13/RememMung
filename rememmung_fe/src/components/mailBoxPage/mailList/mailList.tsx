import React from "react";

import styles from "./styles";

interface MailListProps {
  mailData: {
    id: number;
    title: string;
    writer: string;
    createdAt: string;
  }[];
}

const MailList: React.FC<MailListProps> = ({ mailData }) => {
  return (
    <styles.Table>
      <thead>
        <tr>
          <styles.TableHeader>제목</styles.TableHeader>
          <styles.TableHeader>보낸이</styles.TableHeader>
          <styles.TableHeader>날짜</styles.TableHeader>
        </tr>
      </thead>

      {mailData.map((mail) => (
        <tbody key={mail.id}>
          <tr>
            <styles.TitleData>{mail.title}</styles.TitleData>
            <styles.OtherData>{mail.writer}</styles.OtherData>
            <styles.OtherData>{mail.createdAt}</styles.OtherData>
          </tr>
        </tbody>
      ))}
    </styles.Table>
  );
};

export default MailList;
