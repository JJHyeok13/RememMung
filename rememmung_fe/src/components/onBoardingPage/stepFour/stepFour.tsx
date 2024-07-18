import React, { ChangeEvent, useState } from "react";

import styles from "./styles";
import InputButton from "./inputButton";

import axios from "axios";
import { updateUploadFile, uploadFile } from "@server/content/api/attachment";

import PrevButtonImage from "@assets/onBoardingPage/prevButton.svg";
import DisableNextButtonImage from "@assets/onBoardingPage/disableNextButton.svg";
import AbleNextButtonImage from "@assets/onBoardingPage/ableNextButton.svg";

interface StepFourProps {
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const StepFour: React.FC<StepFourProps> = ({
  handlePrevStep,
  handleNextStep,
}) => {
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    기본사진: null,
    앉아있는사진: null,
    누워있는사진: null,
    걷고있는사진: null,
    뛰고있는사진: null,
  });

  const [previews, setPreviews] = useState<{ [key: string]: string | null }>({
    기본사진: null,
    앉아있는사진: null,
    누워있는사진: null,
    걷고있는사진: null,
    뛰고있는사진: null,
  });

  const handleFileChange = async (
    e: ChangeEvent<HTMLInputElement>,
    description: string
  ) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviews((prev) => ({ ...prev, [description]: preview }));
      setFiles((prev) => ({ ...prev, [description]: file }));
      await handleFileUpload(file);
    }
  };

  const handleFileUpload = async (file: File) => {
    try {
      const { signedUrl, attachmentId } = await uploadFile({
        type: file.type,
      });

      await axios.put(signedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      await updateUploadFile(attachmentId);
    } catch (error) {
      console.error("파일 업로드 실패:", error);
    }
  };

  const isBasicPhotoUploaded = !!files.기본사진;

  const disableButtonClick = () => {
    alert("기본사진을 첨부해주세요!");
  };

  return (
    <styles.Container>
      <styles.Title>반려동물의 성격을 선택해주세요</styles.Title>
      <styles.SubTitle>
        해당하는 사진이 없다면 원하는 사진을 넣어주세요
      </styles.SubTitle>
      <styles.InputContainer>
        {[
          "기본사진",
          "앉아있는사진",
          "누워있는사진",
          "걷고있는사진",
          "뛰고있는사진",
        ].map((description) => (
          <InputButton
            key={description}
            description={description}
            imageUrl={previews[description] || undefined}
            onFileChange={(e) => handleFileChange(e, description)}
          />
        ))}
      </styles.InputContainer>

      <styles.PrevButton src={PrevButtonImage} onClick={handlePrevStep} />

      <styles.NextButton
        src={
          isBasicPhotoUploaded ? AbleNextButtonImage : DisableNextButtonImage
        }
        onClick={isBasicPhotoUploaded ? handleNextStep : disableButtonClick}
      />
    </styles.Container>
  );
};

export default StepFour;
