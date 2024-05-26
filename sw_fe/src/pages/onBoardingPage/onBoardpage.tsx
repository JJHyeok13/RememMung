import React from "react";

import BackgroundImage from "../../assets/onBoardingPage/background.svg";
import styled from "styled-components";
import StepComponent from "../../components/onBoardingPage/stepComponent/stepComponent";

const Background = styled.div`
  background: url(${BackgroundImage});
  width: 100vw;
  height: 100vh;
`;

const OnBoardingPage: React.FC = () => {
  return (
    <Background>
      <StepComponent />
    </Background>
  );
};

export default OnBoardingPage;
