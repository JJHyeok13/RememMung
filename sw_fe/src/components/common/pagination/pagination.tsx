import React, { useState } from "react";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import styles from "./styles";

const Pagination: React.FC = () => {
  const [totalPage, setTotalPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageNumbers = [];

  for (let i = 0; i < totalPage; i++) {
    pageNumbers.push(i + 1);
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <styles.Container>
      <MdNavigateBefore size={24} fill="#767676" onClick={handlePrevPage} />
      <styles.PageContainer>
        {pageNumbers.map((page, index) => (
          <styles.PaginationItem
            key={index}
            $isActive={currentPage === page}
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
