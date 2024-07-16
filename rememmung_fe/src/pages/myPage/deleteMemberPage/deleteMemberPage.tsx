import React from "react";

import styles from "./styles";

import DeleteMemberComponent from "@components/myPage/deleteMemberPage/deleteMemberComponent";

const DeleteMemberPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen pb-[100px] overflow-y-auto pl-10">
      <DeleteMemberComponent />
    </div>
  );
};

export default DeleteMemberPage;
