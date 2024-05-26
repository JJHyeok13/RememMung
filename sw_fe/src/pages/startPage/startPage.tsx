import React from "react";
import styled from "styled-components";

import BackgroundImage from "../../assets/startPage/background.svg";

import KakaoLoginImage from "../../assets/startPage/kakaoButton.svg";
import NaverLoginImage from "../../assets/startPage/naverButton.svg";

const Background = styled.div`
  background: url(${BackgroundImage});
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

const Gradation = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.42)),
    linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));
  background-blend-mode: multiply;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  position: fixed;
  bottom: 200px;
  right: 100px;
  text-align: right;
  color: white;
`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 8px;
`;

const Subtitle = styled.div`
  font-size: 18px;
  margin-top: 4px;
  margin-bottom: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Button = styled.img`
  display: flex;
  width: 184px;
  height: 45px;
  cursor: pointer;

  &:first-child {
    margin-bottom: 12px;
  }
`;

const StartPage: React.FC = () => {
  return (
    <Background>
      <Gradation>
        <Container>
          <Title>당신의 건강한 이별을 위해</Title>
          <b>
            <Title>리멤멍이 함께할게요!</Title>
          </b>
          <Subtitle>
            리멤멍은 생성형 AI를 활용한 반려동물 추억 회상 서비스입니다.
          </Subtitle>

          <ButtonContainer>
            <Button src={KakaoLoginImage} />
            <Button src={NaverLoginImage} />
          </ButtonContainer>
        </Container>
      </Gradation>
    </Background>
  );
};

export default StartPage;
