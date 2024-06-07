import React from "react";

import styles from "./styles";

import DeleteDataComponent from "@components/myPage/deleteMemberPage/deleteMemberComponent";

const DeleteDataPage: React.FC = () => {
  return (
    <styles.Container>
      <DeleteDataComponent />
    </styles.Container>
  );
};

export default DeleteDataPage;
