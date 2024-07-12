import React, { ChangeEvent, useState } from "react";

import styles from "./styles";
import InputButton from "./inputButton";

import PrevButtonImage from "@assets/onBoardingPage/prevButton.svg";
import DisableNextButtonImage from "@assets/onBoardingPage/disableNextButton.svg";
import AbleNextButtonImage from "@assets/onBoardingPage/ableNextButton.svg";
import { uploadFile } from "@server/content/api/attachment";
import { useRecoilState } from "recoil";
import { basicPetImage } from "recoil/recoil";

interface StepFourProps {
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const StepFour: React.FC<StepFourProps> = ({
  handlePrevStep,
  handleNextStep,
}) => {
  const [, setBasicPetImage] = useRecoilState(basicPetImage);

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

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    description: string
  ) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;

        // Extracting the Base64 part
        const base64String = dataUrl.split(",")[1];

        uploadFile({ type: base64String })
          .then((res) => {
            console.log("S3 업로드 성공");
            setBasicPetImage(res.signedUrl);
          })
          .catch((error) => {
            console.error("S3 업로드 실패", error);
          });

        setPreviews((prevPreviews) => ({
          ...prevPreviews,
          [description]: URL.createObjectURL(file),
        }));
      };
      reader.readAsDataURL(file);
    }
    setFiles((prevFiles) => ({ ...prevFiles, [description]: file }));
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
