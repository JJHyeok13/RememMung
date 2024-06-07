import React, { useState } from "react";

import styles from "./styles";
import DeleteModal from "../deleteModal/deleteModal";

const DeleteMemberComponent: React.FC = () => {
  const [selectModalOpen, setSelectModalOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setSelectModalOpen(true);
  };

  const handleClose = () => {
    setSelectModalOpen(false);
  };

  return (
    <>
      <styles.Container>
        <styles.Content>
          <styles.Title>탈퇴 전 꼭 확인해주세요!</styles.Title>
          <div>탈퇴하시게 된다면, 모든 데이터가 사라집니다!</div>
          <div>저장한 스크립트, 게시글 등등 모든 데이터가 사라집니다...</div>
        </styles.Content>
        <styles.DeleteButton onClick={handleOpen}>탈퇴하기</styles.DeleteButton>
      </styles.Container>

      {selectModalOpen && <DeleteModal handleClose={handleClose} />}
    </>
  );
};

export default DeleteMemberComponent;
