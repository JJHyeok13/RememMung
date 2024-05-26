import React from "react";

import styles from "./styles";

import LogoImage from "../../assets/Logo.svg";

const Header: React.FC = () => {
  return (
    <styles.Container>
      <styles.StyledLink to="/">
        <styles.LeftContainer>
          <styles.LogoImage src={LogoImage} alt="Logo Image" />
          <div>리멤멍</div>
        </styles.LeftContainer>
      </styles.StyledLink>
      <styles.RightContainer>
        <styles.Button>로그인</styles.Button>
        <styles.Button>회원가입</styles.Button>
      </styles.RightContainer>
    </styles.Container>
  );
};

export default Header;
