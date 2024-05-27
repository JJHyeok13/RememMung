import React from "react";

import StepComponent from "@components/onBoardingPage/stepComponent/stepComponent";

import styles from "./styles";

const OnBoardingPage: React.FC = () => {
  return (
    <styles.Background>
      <StepComponent />
    </styles.Background>
  );
};

export default OnBoardingPage;
