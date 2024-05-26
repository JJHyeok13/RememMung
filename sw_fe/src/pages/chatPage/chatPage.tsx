import React from "react";

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
  display: flex;
  justify-content: center;
  width: 1080px;
  height: 551px;
  border-radius: 12px;
  background-color: #f4f4f4;

  margin: 0 auto;
`;

const PetImage = styled.img`
  width: 1080px;
  height: 551px;
  border-radius: 12px;
`;

const ChatPage: React.FC = () => {
  return (
    <Container>
      <WhiteBox>
        <PetImage src={PetImageExample} />
      </WhiteBox>
      <ChattingInput />
    </Container>
  );
};

export default ChatPage;
