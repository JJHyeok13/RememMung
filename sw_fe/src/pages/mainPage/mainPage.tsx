import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  margin: 0 auto;
`;

const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1080px;
  height: 551px;
  border-radius: 12px;
  background-color: #f4f4f4;

  // 글씨 관련 CSS
  font-size: 18px;
  color: #5d606b;
  line-height: 180%;
  letter-spacing: -0.02em;

  padding: 32px 16px 32px 32px;
  box-sizing: border-box;

  margin: 0 auto;
`;

const MainPage: React.FC = () => {
  return (
    <Container>
      <WhiteBox>
        <div>반가워요!</div>
        <div>
          리멤멍은 반려동물과의 이별을 하게된 사람들을 위해 과거의 추억 회상을
          통해
        </div>
        <div>이별을 준비하고 도와주는 것을 목표로 제작된 서비스에요..</div>
        <div>당신의 반려동물과 건강한 이별을 리멤멍이 도와줄게요!</div>
        <br />
        <br />
      </WhiteBox>
    </Container>
  );
};

export default MainPage;
