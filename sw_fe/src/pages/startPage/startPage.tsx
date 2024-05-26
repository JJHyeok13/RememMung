import React from "react";

import KakaoLoginImage from "../../assets/startPage/kakaoButton.svg";
import NaverLoginImage from "../../assets/startPage/naverButton.svg";

import styles from "./styles";

const StartPage: React.FC = () => {
  return (
    <styles.Background>
      <styles.Gradation>
        <styles.Container>
          <styles.Title>당신의 건강한 이별을 위해</styles.Title>
          <b>
            <styles.Title>리멤멍이 함께할게요!</styles.Title>
          </b>
          <styles.Subtitle>
            리멤멍은 생성형 AI를 활용한 반려동물 추억 회상 서비스입니다.
          </styles.Subtitle>

          <styles.ButtonContainer>
            <styles.Button src={KakaoLoginImage} />
            <styles.Button src={NaverLoginImage} />
          </styles.ButtonContainer>
        </styles.Container>
      </styles.Gradation>
    </styles.Background>
  );
};

export default StartPage;
