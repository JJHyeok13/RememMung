import React, { ChangeEvent, useState } from "react";

import styles from "./styles";
import InputButton from "./inputButton";

import PrevButtonImage from "@assets/onBoardingPage/prevButton.svg";
import DisableNextButtonImage from "@assets/onBoardingPage/disableNextButton.svg";
import AbleNextButtonImage from "@assets/onBoardingPage/ableNextButton.svg";
// import { uploadFile } from "@server/content/api/attachment";
import { useRecoilState } from "recoil";
import { basicPetImage } from "recoil/recoil";
import axiosInstance from "@axios/content/axios.Instance";
import axios from "axios";

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

  const handleFileChange = async (
    e: ChangeEvent<HTMLInputElement>,
    description: string
  ) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviews((prev) => ({ ...prev, [description]: preview }));
      setFiles((prev) => ({ ...prev, [description]: file }));

      if (description === "기본사진") {
        const uploadedUrl = await uploadFileToS3(file);
        setBasicPetImage(uploadedUrl);
      }
    }
  };

  const uploadFileToS3 = async (file: File): Promise<string> => {
    try {
      const {
        data: { signedUrl, url },
      } = await axiosInstance.post(
        `${import.meta.env.VITE_CONTENT_SERVER_URL}/attachment/prepare-upload`,
        {
          fileName: file.name,
          fileType: file.type,
        }
      );

      // Convert the file to a Blob
      const arrayBuffer = await file.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: file.type });

      // Upload the file to S3 using the signed URL
      await axios.put(signedUrl, blob, {
        headers: {
          "Content-Type": file.type,
        },
      });

      console.log(url);
      return url;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw new Error("File upload failed");
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
