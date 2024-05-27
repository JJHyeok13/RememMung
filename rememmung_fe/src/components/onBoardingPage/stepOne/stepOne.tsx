import React from "react";
import styles from "./styles";

import DisableNextButtonImage from "../../../assets/onBoardingPage/disableNextButton.svg";
import AbleNextButtonImage from "../../../assets/onBoardingPage/ableNextButton.svg";

interface StepOneProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  handleNextStep: () => void;
}

const StepOne: React.FC<StepOneProps> = ({
  selectedType,
  setSelectedType,
  handleNextStep,
}) => {
  const types = [
    { id: "dog", name: "🐶 강아지" },
    { id: "cat", name: "🐱 고양이" },
    { id: "hamster", name: "🐹 햄스터" },
    { id: "raccoon", name: "🦝 라쿤" },
    { id: "lizard", name: "🦎 도마뱀" },
    { id: "turtle", name: "🐢 거북이" },
    { id: "rabbit", name: "🐰 토끼" },
    { id: "parrot", name: "🦜 앵무새" },
    { id: "pig", name: "🐷 돼지" },
    { id: "duck", name: "🦆 오리" },
    { id: "fish", name: "🐠 물고기" },
    { id: "monkey", name: "🐵 원숭이" },
    { id: "hedgedog", name: "🦔 고슴도치" },
    { id: "frog", name: "🐸 개구리" },
  ];

  const isInputComplete = selectedType !== "";

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.id);
  };

  return (
    <styles.Container>
      <styles.Title>반려동물의 종을 선택해주세요</styles.Title>
      <styles.OptionContainer>
        {types.map((type) => (
          <React.Fragment key={type.id}>
            <styles.Option
              type="radio"
              id={type.id}
              name="petType"
              checked={selectedType === type.id}
              onChange={handleOptionChange}
            />
            <styles.Label htmlFor={type.id}>
              <span>{type.name}</span>
            </styles.Label>
          </React.Fragment>
        ))}
      </styles.OptionContainer>

      <button onClick={handleNextStep} disabled={!isInputComplete}>
        <styles.NextButton
          src={!isInputComplete ? DisableNextButtonImage : AbleNextButtonImage}
        />
      </button>
    </styles.Container>
  );
};

export default StepOne;
