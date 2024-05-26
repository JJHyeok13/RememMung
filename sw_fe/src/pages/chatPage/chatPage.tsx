import React from "react";

import useBodyOverflowHidden from "../../\bhooks/useBodyOverflowHidden";

import styled from "styled-components";

import PetImageExample from "../../assets/mainPage/PetImageExample.svg";
import ChattingInput from "../../components/mainPage/chattingInput/chattingInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  margin: 0 auto;
`;

const WhiteBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1080px;
  height: 580px;
  border-radius: 12px;
  background-image: url(${PetImageExample});

  margin: 0 auto;
`;

const ChatPage: React.FC = () => {
  // 스크롤 방지 Hooks
  useBodyOverflowHidden();

  return (
    <Container>
      <WhiteBox>
        <ChattingInput />
      </WhiteBox>
    </Container>
  );
};

export default ChatPage;
