import React, { useState } from "react";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import styles from "./styles";

const Pagination: React.FC = () => {
  const [totalPage, setTotalPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pageNumbers = [];

  for (let i = 0; i < totalPage; i++) {
    pageNumbers.push(i + 1);
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <styles.Container>
      <MdNavigateBefore size={24} fill="#767676" />
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
      <MdNavigateNext size={24} fill="#767676" />
    </styles.Container>
  );
};

export default Pagination;
