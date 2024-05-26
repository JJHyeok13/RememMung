import React from "react";

import styles from "./styles";

import LogoImage from "../../assets/header/Logo.svg";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleMypage = () => {
    navigate("/mypage");
  };

  return (
    <styles.Container>
      <styles.StyledLink to="/main">
        <styles.LeftContainer>
          <styles.LogoImage src={LogoImage} alt="Logo Image" />
          <div>리멤멍</div>
        </styles.LeftContainer>
      </styles.StyledLink>
      <styles.RightContainer>
        <styles.Greeting>
          <styles.Nickname>정현</styles.Nickname>님 반가워요!
        </styles.Greeting>
        <styles.Button onClick={handleMypage}>마이페이지</styles.Button>
        <styles.Button>로그아웃</styles.Button>
      </styles.RightContainer>
    </styles.Container>
  );
};

export default Header;
