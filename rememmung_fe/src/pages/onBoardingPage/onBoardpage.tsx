import React from "react";

import StepComponent from "@components/onBoardingPage/stepComponent/stepComponent";

import styles from "./styles";
import useBodyOverflowHidden from "@hooks/useBodyOverflowHidden";

const OnBoardingPage: React.FC = () => {
  useBodyOverflowHidden();

  return (
    <styles.Background>
      <StepComponent />
    </styles.Background>
  );
};

export default OnBoardingPage;
