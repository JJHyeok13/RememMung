import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles";

import LogoImage from "@assets/header/Logo.svg";
import { logoutUser } from "@server/user/api/oauth";
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
    navigate(`/`);
  };

  return (
    <styles.Container>
      <styles.StyledLink to="/main">
        <styles.LeftContainer className="headerFont">
          <styles.LogoImage src={LogoImage} alt="Logo Image" />
          <div>리멤멍</div>
        </styles.LeftContainer>
      </styles.StyledLink>
      <styles.RightContainer>
        <styles.Greeting>
          <styles.Nickname>{username}</styles.Nickname>님 반가워요!
        </styles.Greeting>
        <styles.Button onClick={handleMypage}>마이페이지</styles.Button>
        <styles.Button onClick={handleLogout}>로그아웃</styles.Button>
      </styles.RightContainer>
    </styles.Container>
  );
};

export default Header;
