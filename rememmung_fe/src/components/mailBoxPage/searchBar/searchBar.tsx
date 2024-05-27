import React, { useState } from "react";

import styles from "./styles";

const SearchBar: React.FC = () => {
  const [period, setPeriod] = useState();
  const [searchType, setSearchType] = useState<string>();
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <styles.Container>
      <styles.SelectBox>
        <option>전체기간</option>
      </styles.SelectBox>
      <styles.SelectBox>
        <option>게시글 + 댓글</option>
      </styles.SelectBox>
      <styles.InputContainer>
        <styles.Input type="text" placeholder="검색어를 입력해주세요" />
        <styles.SearchButton>검색</styles.SearchButton>
      </styles.InputContainer>
    </styles.Container>
  );
};

export default SearchBar;
