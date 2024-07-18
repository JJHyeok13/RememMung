import React, { useState } from "react";

import MailList from "@components/mailBoxPage/mailList/mailList";
import Pagination from "@components/common/pagination/pagination";
import SearchBar from "@components/mailBoxPage/searchBar/searchBar";

import styles from "./styles";

import { updateLetter } from "@server/content/api/letter";
import { useNavigate } from "react-router-dom";

interface MailDataProps {
  totalCount: number;
  nodes: {
    id: number;
    title: string;
    content: string;
    letterType: string;
    createdAt: string;
    from: string;
    video?: string;
  }[];
}

const MyMailPage: React.FC = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const [mailData, setMailData] = useState<MailDataProps>({
    totalCount: 0,
    nodes: [],
  });
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 7;

  // @ts-ignore
  const [totalPage, setTotalPage] = useState<number>(
    Math.ceil(mailData.totalCount / pageSize)
  );

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  // 편지 상세 뷰 관리 변수
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = (letterId: number) => {
    updateLetter(letterId, { isRead: true });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const ToWritePage = () => {
    navigate("/write");
  };

  return (
    <div className="flex flex-col w-full h-screen pb-[100px] overflow-y-auto pl-10">
      <styles.ElementBox>
        {mailData && mailData.nodes.length > 0 ? (
          <>
            <MailList
              mailData={mailData.nodes}
              isOpen={isOpen}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
            <Pagination
              currentPage={currentPage}
              handlePage={handlePage}
              totalPage={totalPage}
            />
          </>
        ) : (
          <styles.NoData>데이터가 존재하지 않습니다.</styles.NoData>
        )}
      </styles.ElementBox>
      <styles.LowerContainer>
        <SearchBar />
        <styles.ButtonContainer>
          <styles.WriteButton onClick={ToWritePage}>
            편지쓰기
          </styles.WriteButton>
        </styles.ButtonContainer>
      </styles.LowerContainer>
    </div>
  );
};

export default MyMailPage;
