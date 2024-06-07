import React, { useState } from "react";

import MailList from "@components/mailBoxPage/mailList/mailList";
import Pagination from "@components/common/pagination/pagination";
import SearchBar from "@components/mailBoxPage/searchBar/searchBar";

import styles from "./styles";

import { dummyData } from "./dummyData";
import { useNavigate } from "react-router-dom";

const MyMailPage: React.FC = () => {
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);

  const OnDeleteMode = () => {
    setIsDeleteMode(true);
  };

  const OffDeleteMode = () => {
    setIsDeleteMode(false);
  };

  return (
    <styles.Container>
      <styles.ElementBox>
        <MailList mailData={dummyData} isDeleteMode={isDeleteMode} />
        <Pagination />
      </styles.ElementBox>
      <styles.LowerContainer>
        <SearchBar />
        <styles.ButtonContainer>
          {!isDeleteMode ? (
            <styles.DeleteButton onClick={OnDeleteMode}>
              삭제
            </styles.DeleteButton>
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

export default MyMailPage;
