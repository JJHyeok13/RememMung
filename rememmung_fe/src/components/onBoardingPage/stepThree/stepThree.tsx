import React from "react";
import styles from "./styles";

import PrevButtonImage from "@assets/onBoardingPage/prevButton.svg";
import DisableNextButtonImage from "@assets/onBoardingPage/disableNextButton.svg";
import AbleNextButtonImage from "@assets/onBoardingPage/ableNextButton.svg";

interface StepThreeProps {
  selectedCharacter: string[];
  setSelectedCharacter: (character: string[]) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({
  selectedCharacter,
  setSelectedCharacter,
  handlePrevStep,
  handleNextStep,
}) => {
  const characters = [
    { id: "energetic", name: "활발해요" },
    { id: "playful", name: "장난끼가 많아요" },
    { id: "timid", name: "겁이 많아요" },
    { id: "lonely", name: "외로움을 많이 타요" },
    { id: "shy", name: "소심해요" },
    { id: "stroller", name: "산책을 좋아해요" },
    { id: "foodie", name: "먹는걸 좋아해요" },
    { id: "friendly", name: "친구를 좋아해요" },
    { id: "solitary", name: "혼자 있는걸 좋아해요" },
    { id: "swimmer", name: "수영하는걸 좋아해요" },
  ];

  const isInputComplete = selectedCharacter.length > 0;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedCharacter((prevCharacters) => [...prevCharacters, id]);
    } else {
      setSelectedCharacter((prevCharacters) =>
        prevCharacters.filter((char) => char !== id)
      );
    }
  };

  return (
    <styles.Container>
      <styles.Title>반려동물의 성격을 선택해주세요</styles.Title>
      <styles.OptionContainer>
        {characters.map((character) => (
          <React.Fragment key={character.id}>
            <styles.Option
              type="checkbox"
              id={character.id}
              name="petCharacter"
              onChange={handleCheckboxChange}
            />
            <styles.Label htmlFor={character.id}>
              <span>{character.name}</span>
            </styles.Label>
          </React.Fragment>
        ))}
      </styles.OptionContainer>

      <styles.PrevButton src={PrevButtonImage} onClick={handlePrevStep} />

      <button onClick={handleNextStep} disabled={!isInputComplete}>
        <styles.NextButton
          src={!isInputComplete ? DisableNextButtonImage : AbleNextButtonImage}
        />
      </button>
    </styles.Container>
  );
};

export default StepThree;
