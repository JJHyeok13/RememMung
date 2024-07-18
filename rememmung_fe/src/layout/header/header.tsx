import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { logoutUser } from "@server/user/api/oauth";

import LogoImage from "@assets/header/Logo.svg";

import { useRecoilValue } from "recoil";
import { userName } from "recoil/recoil";

const Header: React.FC = () => {
  const username = useRecoilValue(userName);

  const navigate = useNavigate();

  const handleMypage = () => {
    navigate("/mypage/mymail");
  };

  const handleLogout = () => {
    logoutUser();
    navigate(`/chat`);
  };

  return (
    <div className="flex flex-row justify-between w-5/6 py-8 mx-auto">
      <Link className="flex flex-row items-center no-underline" to="/main">
        <img className="mr-2" src={LogoImage} alt="Logo Image" />
        <div className="font-['SebangGothic'] text-brown-500 text-2xl">
          리멤멍
        </div>
      </Link>

      <div className="font-['Pretendard'] flex flex-row items-center">
        <div>
          <span className="font-semibold text-brown-500">{username}</span>님
          반가워요!
        </div>
        <div
          className="cursor-pointer text-xs rounded-[60px] px-4 py-2 bg-[#d0d2d6] text-[#838383] hover:bg-brown-500 hover:text-white ml-2"
          onClick={handleMypage}
        >
          마이페이지
        </div>
        <div
          className="cursor-pointer text-xs rounded-[60px] px-4 py-2 bg-[#d0d2d6] text-[#838383] hover:bg-brown-500 hover:text-white ml-2"
          onClick={handleLogout}
        >
          로그아웃
        </div>
      </div>
    </div>
  );
};

export default Header;
