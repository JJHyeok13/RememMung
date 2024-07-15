import React, { useEffect } from "react";

import { getPetInfo, getUserInfo } from "@server/user/api/user";

import { useRecoilState } from "recoil";
import { userName, petName } from "recoil/recoil";

const MainPage: React.FC = () => {
  const [, setUserName] = useRecoilState(userName);
  const [, setPetName] = useRecoilState(petName);

  useEffect(() => {
    getUserInfo().then((res) => setUserName(res.data.userName));
    getPetInfo().then((res) => setPetName(res.name));
  }, []);

  return (
    <div className="w-5/6 mx-auto bg-[#f6f6f8] flex flex-col justify-center h-2/3 py-8 pl-8 pr-4 rounded-xl text-[#5d606b] text-lg">
      <div>반가워요!</div>
      <div>
        리멤멍은 반려동물과의 이별을 하게된 사람들을 위해 과거의 추억 회상을
        통해
      </div>
      <div>이별을 준비하고 도와주는 것을 목표로 제작된 서비스에요..</div>
      <div>당신의 반려동물과 건강한 이별을 리멤멍이 도와줄게요!</div>
      <br />
      <br />
    </div>
  );
};

export default MainPage;
