import React, { useState } from "react";

import DeleteComponent from "@components/myPage/deleteComponent";
import DeleteModal from "@components/myPage/deleteModal/deleteModal";

const DeleteDataPage: React.FC = () => {
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
        title="데이터 삭제 전 읽어주세요!"
        str="데이터를 삭제하시면, 회원은 유지되지만"
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

export default DeleteDataPage;
