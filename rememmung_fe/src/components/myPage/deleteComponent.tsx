import React from "react";

import { useRecoilValue } from "recoil";
import { petName } from "recoil/recoil";

interface DeleteComponentProps {
  title: string;
  str: string;
}

const DeleteComponent: React.FC<DeleteComponentProps> = ({ title, str }) => {
  const petname = useRecoilValue(petName);

  return (
    <div className="p-4 pl-5 mb-2 rounded-lg bg-[#F6F6F8]">
      <div className="text-[#e02626] text-lg font-bold mb-2">{title}</div>
      <div className="text-sm text-[#444444]">{str}</div>
      <div className="text-sm text-[#444444]">
        {petname}와 나눴던 대화, 사진, 편지 등등 모든 데이터가 사라집니다...
      </div>
    </div>
  );
};

export default DeleteComponent;
