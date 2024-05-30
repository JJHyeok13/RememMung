import React, { useState } from "react";

import useBodyOverflowHidden from "@hooks/useBodyOverflowHidden";

import StepComponent from "@components/onBoardingPage/stepComponent/stepComponent";

import styles from "./styles";
import LoadingComponent from "@components/onBoardingPage/loadingComponent/loadingComponent";
import CompleteComponent from "@components/onBoardingPage/completeComponent/completeComponent";

const OnBoardingPage: React.FC = () => {
  useBodyOverflowHidden();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const [petData, setPetData] = useState<any>(null);

  const submitData = async (data: any) => {
    //setIsLoading(true);

    // 데이터 POST API 함수 호출
    setIsComplete(true);
  };

  const handleReload = async () => {
    setIsComplete(false);
    setIsLoading(true);

    // 다시 생성하기 요청 API 함수 호출
    //setIsComplete(true);
  };

  return (
    <styles.Background>
      {!isComplete && !isLoading && <StepComponent onSubmit={submitData} />}

      {isLoading && <LoadingComponent />}

      {isComplete && (
        <CompleteComponent petData={petData} handleReload={handleReload} />
      )}
    </styles.Background>
  );
};

export default OnBoardingPage;
