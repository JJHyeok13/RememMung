import React from "react";

import styles from "./styles";

import PrevButtonImage from "../../../assets/onBoardingPage/prevButton.svg";

import DisableNextButtonImage from "../../../assets/onBoardingPage/disableNextButton.svg";
import AbleNextButtonImage from "../../../assets/onBoardingPage/ableNextButton.svg";

interface StepFiveProps {
  selectedName: string;
  setName: (name: string) => void;
  handlePrevStep: () => void;
  handleSubmit: () => void;
}

const StepFive: React.FC<StepFiveProps> = ({
  selectedName,
  handlePrevStep,
  handleSubmit,
}) => {
  const isInputComplete = selectedName !== "";

  return (
    <styles.Container>
      <styles.Title>반려동물의 추가정보를 입력해주세요!</styles.Title>
      <styles.SubTitle>
        선택사항이지만, 대답해주신다면 더 정확한 AI 모델을 얻을 수 있어요
      </styles.SubTitle>

      <div>
        <h3>성별</h3>
        <input type="radio" name="male" />
        <label htmlFor="male">남자</label>

        <input type="radio" name="female" />
        <label htmlFor="female">여자</label>
      </div>

      <div>
        <h3>생일</h3>
        <input type="number" /> 년
        <input type="number" /> 월
        <input type="number" /> 일
      </div>

      <div>
        <h3>이별한 날짜</h3>
        <input type="number" /> 년
        <input type="number" /> 월
        <input type="number" /> 일
      </div>

      <styles.PrevButton src={PrevButtonImage} onClick={handlePrevStep} />

      <button onClick={handleSubmit} disabled={!isInputComplete}>
        <styles.NextButton
          src={!isInputComplete ? DisableNextButtonImage : AbleNextButtonImage}
        />
      </button>
    </styles.Container>
  );
};

export default StepFive;
