import React from "react";
import styles from "./styles";

import PrevButtonImage from "../../../assets/onBoardingPage/prevButton.svg";

import DisableNextButtonImage from "../../../assets/onBoardingPage/disableNextButton.svg";
import AbleNextButtonImage from "../../../assets/onBoardingPage/ableNextButton.svg";

interface StepTwoProps {
  selectedName: string;
  setName: (name: string) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({
  selectedName,
  setName,
  handlePrevStep,
  handleNextStep,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const isInputComplete = selectedName !== "";

  return (
    <styles.Container>
      <styles.Title>반려동물의 이름을 입력해주세요</styles.Title>
      <styles.Input
        type="text"
        placeholder="이름을 입력해주세요"
        value={selectedName}
        onChange={handleInputChange}
        $borderColor={selectedName ? "#53555C" : "#b9bbc2"}
      />

      <styles.PrevButton src={PrevButtonImage} onClick={handlePrevStep} />

      <button onClick={handleNextStep} disabled={!isInputComplete}>
        <styles.NextButton
          src={!isInputComplete ? DisableNextButtonImage : AbleNextButtonImage}
        />
      </button>
    </styles.Container>
  );
};

export default StepTwo;
