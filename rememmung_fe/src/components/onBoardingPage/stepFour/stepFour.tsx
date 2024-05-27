import React from "react";

import styles from "./styles";
import InputButton from "./inputButton";

import PrevButtonImage from "../../../assets/onBoardingPage/prevButton.svg";

import DisableNextButtonImage from "../../../assets/onBoardingPage/disableNextButton.svg";
import AbleNextButtonImage from "../../../assets/onBoardingPage/ableNextButton.svg";

interface StepFourProps {
  selectedName: string;
  setName: (name: string) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const ImageUpload: React.FC<StepFourProps> = ({
  selectedName,
  handlePrevStep,
  handleNextStep,
}) => {
  const isInputComplete = selectedName !== "";

  return (
    <styles.Container>
      <styles.Title>반려동물의 성격을 선택해주세요</styles.Title>
      <styles.SubTitle>
        해당하는 사진이 없다면 원하는 사진을 넣어주세요
      </styles.SubTitle>
      <styles.InputContainer>
        <InputButton description="앉아있는 사진" />
        <InputButton description="누워있는 사진" />
        <InputButton description="걷고있는 사진" />
        <InputButton description="뛰고있는 사진" />
        <InputButton description="얼굴 사진" />
      </styles.InputContainer>

      <styles.PrevButton src={PrevButtonImage} onClick={handlePrevStep} />

      <button onClick={handleNextStep} disabled={!isInputComplete}>
        <styles.NextButton
          src={!isInputComplete ? DisableNextButtonImage : AbleNextButtonImage}
        />
      </button>
    </styles.Container>
  );
};

export default ImageUpload;
