import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MailList from "@components/mailBoxPage/mailList/mailList";
import Pagination from "@components/common/pagination/pagination";
import SearchBar from "@components/mailBoxPage/searchBar/searchBar";

import styles from "./styles";

import {
  //getLetterList,
  updateLetter,
} from "@server/content/api/letter";
import { useRecoilValue } from "recoil";
import { mailDataState } from "recoil/recoil";

// interface MailDataProps {
//   totalCount: number;
//   totalPage: number;
//   nodes: {
//     id: number;
//     sourceId: number;
//     from: string;
//     sourceName: string;
//     title: string;
//     content: string;
//     isRead: boolean;
//     createdAt: string;
//   }[];
// }

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

  const mailData = useRecoilValue(mailDataState);
  const totalPage = 1;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 7;

  // @ts-ignore
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

  // useEffect(() => {
  //   getLetterList(config).then((res) => setMailData(res));
  // }, [config, currentPage]);

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  const ToWritePage = () => {
    navigate("/writemail");
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

  return (
    <styles.Container>
      <styles.ElementBox>
        {mailData && mailData.length > 0 ? (
          <>
            <MailList
              mailData={mailData}
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
    </styles.Container>
  );
};

export default MailBoxPage;
