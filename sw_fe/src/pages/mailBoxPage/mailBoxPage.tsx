import React from "react";

import styles from "./styles";

import { dummyData } from "./dummyData";
import MailList from "../../components/mailBoxPage/mailList/mailList";
import SearchBar from "../../components/mailBoxPage/searchBar/searchBar";
import Pagination from "../../components/common/pagination/pagination";

const MailBoxPage: React.FC = () => {
  return (
    <styles.Container>
      <styles.ElementBox>
        <MailList mailData={dummyData} />
        <Pagination />
      </styles.ElementBox>
      <styles.LowerContainer>
        <SearchBar />
        <styles.ButtonContainer>
          <styles.WriteButton>편지쓰기</styles.WriteButton>
          <styles.DeleteButton>삭제</styles.DeleteButton>
        </styles.ButtonContainer>
      </styles.LowerContainer>
    </styles.Container>
  );
};

export default MailBoxPage;
