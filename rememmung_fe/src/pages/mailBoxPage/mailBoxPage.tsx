import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MailList from "@components/mailBoxPage/mailList/mailList";
import Pagination from "@components/common/pagination/pagination";
import SearchBar from "@components/mailBoxPage/searchBar/searchBar";

import styles from "./styles";

import { dummyData } from "./dummyData";
import { getLetterList } from "@server/api/content/letter";

interface MailDataProps {
  totalCount: number;
  nodes: {
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

interface ConfigProps {
  params: {
    page?: number;
    pageSize?: number;
    letterFilter: string;
    titleQuery?: string;
    contentQuery?: string;
    startData?: string;
    endDate?: string;
  };
}

const MailBoxPage: React.FC = () => {
  const navigate = useNavigate();

  const [mailData, setMailData] = useState<MailDataProps>(dummyData);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 7;

  const [totalPage, setTotalPage] = useState<number>(
    Math.ceil(mailData.totalCount / pageSize)
  );

  const [config, setConfig] = useState<ConfigProps>({
    params: {
      page: currentPage,
      pageSize: pageSize,
      letterFilter: "ALL",
      titleQuery: "",
      contentQuery: "",
      startData: "",
      endDate: "",
    },
  });

  useEffect(() => {
    getLetterList(config).then((res) => setMailData(res));
  });

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);

  const ToWritePage = () => {
    navigate("/write");
  };

  const OnDeleteMode = () => {
    setIsDeleteMode(true);
  };

  const OffDeleteMode = () => {
    setIsDeleteMode(false);
  };

  return (
    <styles.Container>
      <styles.ElementBox>
        <MailList mailData={mailData.nodes} isDeleteMode={isDeleteMode} />
        <Pagination
          currentPage={currentPage}
          handlePage={handlePage}
          totalPage={totalPage}
        />
      </styles.ElementBox>
      <styles.LowerContainer>
        <SearchBar />
        <styles.ButtonContainer>
          {!isDeleteMode ? (
            <>
              <styles.WriteButton onClick={ToWritePage}>
                편지쓰기
              </styles.WriteButton>
              <styles.DeleteButton onClick={OnDeleteMode}>
                삭제
              </styles.DeleteButton>
            </>
          ) : (
            <>
              <styles.WriteButton onClick={OffDeleteMode}>
                취소
              </styles.WriteButton>
              <styles.DeleteButton>삭제</styles.DeleteButton>
            </>
          )}
        </styles.ButtonContainer>
      </styles.LowerContainer>
    </styles.Container>
  );
};

export default MailBoxPage;
