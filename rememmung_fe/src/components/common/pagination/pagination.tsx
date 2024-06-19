import React, { useState } from "react";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import styles from "./styles";

interface PaginationProps {
  page: number;
  handlePage: (num: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, handlePage }) => {
  const [totalPage, setTotalPage] = useState<number>(10);

  const pageNumbers = [];

  for (let i = 0; i < totalPage; i++) {
    pageNumbers.push(i + 1);
  }

  const handlePageClick = (page: number) => {
    handlePage(page);
  };

  const handlePrevPage = () => {
    handlePage(page - 1);
  };

  const handleNextPage = () => {
    handlePage(page + 1);
  };

  return (
    <styles.Container>
      <MdNavigateBefore size={24} fill="#767676" onClick={handlePrevPage} />
      <styles.PageContainer>
        {pageNumbers.map((page, index) => (
          <styles.PaginationItem
            key={index}
            $isActive={page === page}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </styles.PaginationItem>
        ))}
      </styles.PageContainer>
      <MdNavigateNext size={24} fill="#767676" onClick={handleNextPage} />
    </styles.Container>
  );
};

export default Pagination;
