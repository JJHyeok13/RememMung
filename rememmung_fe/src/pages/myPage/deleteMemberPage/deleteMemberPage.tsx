import React, { useState } from "react";

import DeleteComponent from "@components/myPage/deleteComponent";
import DeleteModal from "@components/myPage/deleteModal/deleteModal";

const DeleteMemberPage: React.FC = () => {
  const [selectModalOpen, setSelectModalOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setSelectModalOpen(true);
  };

  const handleClose = () => {
    setSelectModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-screen pb-[100px] overflow-y-auto pl-10">
      <DeleteComponent
        title="탈퇴 전 꼭 확인해주세요!"
        str="탈퇴하시게 된다면, 모든 데이터가 사라져요!"
      />

      <div
        className="bg-[#e02626] text-white ml-auto px-4 py-2 rounded-lg cursor-pointer"
        onClick={handleOpen}
      >
        삭제하기
      </div>

      {selectModalOpen && <DeleteModal handleClose={handleClose} />}
    </div>
  );
};

export default DeleteMemberPage;
