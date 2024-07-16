import React from "react";

import DeleteDataComponent from "@components/myPage/deleteDataPage/deleteDataComponent";

const DeleteDataPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen pb-[100px] overflow-y-auto pl-10">
      <DeleteDataComponent />
    </div>
  );
};

export default DeleteDataPage;
