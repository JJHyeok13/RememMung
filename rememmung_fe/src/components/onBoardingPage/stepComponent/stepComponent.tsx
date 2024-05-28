import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import StepOne from "@components/onBoardingPage/stepOne/stepOne";
import StepTwo from "@components/onBoardingPage/stepTwo/stepTwo";
import StepThree from "@components/onBoardingPage/stepThree/stepThree";
import StepFour from "@components/onBoardingPage/stepFour/stepFour";
import StepFive from "@components/onBoardingPage/stepFive/stepFive";

import styles from "./styles";

const StepComponent: React.FC = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [petType, setPetType] = useState<string>("");
  const [petName, setPetName] = useState<string>("");
  const [petCharacter, setPetCharacter] = useState<string[]>([]);

  const [additionalInfo, setAdditionalInfo] = useState<{
    gender: string;
    birthday: string;
    farewell: string;
    favorite: string[];
    hate: string[];
    skill: string[];
  }>({
    gender: "male",
    birthday: "",
    farewell: "",
    favorite: [],
    hate: [],
    skill: [],
  });

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      console.log(step);
      console.log(petType, petName, petCharacter);
    }
  };

  const handleNextStep = () => {
    if (step < 5) {
      setStep(step + 1);
      console.log(step);
      console.log(petType, petName, petCharacter);
    }
  };

  const handleSubmit = () => {
    console.log("petType :", petType);
    console.log("petName :", petName);
    console.log("petCharacter :", petCharacter);
    console.log("additionalInfo :", additionalInfo);
  };

  const setType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPetType(value);
  };

  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPetName(value);
  };

  return (
    <styles.Container>
      <styles.StepContainer>
        {[1, 2, 3, 4, 5].map((num) => (
          <React.Fragment key={num}>
            <styles.RoundNumber
              $isActive={step === num}
              $isCompleted={num < step}
            >
              {num}
            </styles.RoundNumber>
            {num < 5 && <styles.Line $isCompleted={num < step} />}
          </React.Fragment>
        ))}
      </styles.StepContainer>

      {step === 1 && (
        <StepOne
          selectedType={petType}
          setType={setType}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 2 && (
        <StepTwo
          selectedName={petName}
          setName={setName}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}

      {step === 3 && (
        <StepThree
          selectedCharacter={petCharacter}
          setPetCharacter={setPetCharacter}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}

      {step === 4 && (
        <StepFour
          selectedName={petName}
          setName={setName}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}

      {step === 5 && (
        <StepFive
          additionalInfo={additionalInfo}
          setAdditionalInfo={(info) =>
            setAdditionalInfo((prev) => ({ ...prev, ...info }))
          }
          handlePrevStep={handlePrevStep}
          handleSubmit={handleSubmit}
        />
      )}
    </styles.Container>
  );
};

export default StepComponent;
