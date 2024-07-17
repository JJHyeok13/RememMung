import React, { useEffect, useState } from "react";

import { getPetInfo } from "@server/user/api/user";
import RadioInputBox from "@components/myPage/updatePage/radioInputBox";
import TextInputBox from "@components/myPage/updatePage/textInputBox";
import CheckBoxInput from "@components/myPage/updatePage/checkboxInput";
import TextareaBox from "@components/myPage/updatePage/textareaBox";
import InputButton from "@components/onBoardingPage/stepFour/inputButton";

interface PetInfoProps {
  species: string;
  name: string;
  personality: string[];
  gender: string;
  birthday: string;
  farewellday: string;
  favorites: string[];
  dislike: string[];
  skill: string[];
}

const UpdatePage: React.FC = () => {
  const [petData, setPetData] = useState<PetInfoProps>({
    species: "",
    name: "",
    personality: [],
    gender: "",
    birthday: "",
    farewellday: "",
    favorites: [],
    dislike: [],
    skill: [],
  });

  useEffect(() => {
    getPetInfo().then((res) => {
      const updatedPetData = {
        species: res.species,
        name: res.name,
        personality: res.personality ? res.personality.split(", ") : [],
        gender: res.gender,
        birthday: res.birthday,
        farewellday: res.farewellday || "",
        favorites: res.favorites ? res.favorites.split(", ") : [],
        dislike: res.dislike ? res.dislike.split(", ") : [],
        skill: res.skill ? res.skill.split(", ") : [],
      };
      setPetData(updatedPetData);
    });
  }, []);

  const handleSetPetInfoSpecies = (type: string) => {
    setPetData((prev) => ({ ...prev, species: type }));
  };

  const handleSetPetInfoName = (type: string) => {
    setPetData((prev) => ({ ...prev, name: type }));
  };

  const handleSetPetInfoGender = (type: string) => {
    setPetData((prev) => ({ ...prev, gender: type }));
  };

  const handleSetPetInfoPersonality = (type: string[]) => {
    setPetData((prev) => ({ ...prev, personality: type }));
  };

  const handleSetPetInfoFavorites = (type: string[]) => {
    setPetData((prev) => ({ ...prev, favorites: type }));
  };

  const handleSetPetInfoDislike = (type: string[]) => {
    setPetData((prev) => ({ ...prev, dislike: type }));
  };

  const handleSetPetInfoSkill = (type: string[]) => {
    setPetData((prev) => ({ ...prev, skill: type }));
  };

  const speciesItem = [
    { id: 1, name: "강아지", value: "dog" },
    { id: 2, name: "고양이", value: "cat" },
  ];

  const genderItem = [
    { id: 1, name: "남자", value: "MALE" },
    { id: 2, name: "여자", value: "FEMALE" },
  ];

  const characterItem = [
    { id: 1, value: "energetic", name: "활발해요" },
    { id: 2, value: "playful", name: "장난끼가 많아요" },
    { id: 3, value: "timid", name: "겁이 많아요" },
    { id: 4, value: "lonely", name: "외로움을 많이 타요" },
    { id: 5, value: "shy", name: "소심해요" },
    { id: 6, value: "stroller", name: "산책을 좋아해요" },
    { id: 7, value: "foodie", name: "먹는걸 좋아해요" },
    { id: 8, value: "friendly", name: "친구를 좋아해요" },
    { id: 9, value: "solitary", name: "혼자 있는걸 좋아해요" },
    { id: 10, value: "swimmer", name: "수영하는걸 좋아해요" },
  ];

  return (
    <div className="flex flex-col w-full h-screen pb-[100px] overflow-y-auto pl-10">
      <div className="text-xl font-semibold text-black-500">필수정보</div>
      <RadioInputBox
        title="반려동물 종"
        items={speciesItem}
        selectedValue={petData.species}
        handleSetPetInfoGender={handleSetPetInfoSpecies}
        name="species"
      />

      <TextInputBox
        title="반려동물 이름"
        placeholder="이름을 입력해주세요"
        value={petData.name}
        handleSetPetInfoName={handleSetPetInfoName}
      />

      <CheckBoxInput
        title="반려동물 성격"
        items={characterItem}
        selectedValues={petData.personality}
        handleSetPetInfoPersonality={handleSetPetInfoPersonality}
      />

      <div className="flex flex-row mb-20">
        <div className="mr-[64px]">
          <div className="text-[#808997] font-semibold text-xs mb-2">
            사진(필수)
          </div>
          <InputButton description="기본사진" />
        </div>

        <div>
          <div className="text-[#808997] font-semibold text-xs mb-2">
            사진(선택)
          </div>
          <div className="flex flex-row [&>div]:mr-4">
            <InputButton description="앉아있는 사진" />
            <InputButton description="누워있는 사진" />
            <InputButton description="걷고있는 사진" />
            <InputButton description="뛰고있는 사진" />
          </div>
        </div>
      </div>

      <div className="text-xl font-semibold text-black-500">선택정보</div>
      <RadioInputBox
        title="성별"
        items={genderItem}
        selectedValue={petData.gender}
        handleSetPetInfoGender={handleSetPetInfoGender}
        name="gender"
      />

      <TextareaBox
        title="좋아하는 것"
        placeholder="ex. 분홍색 애착 토끼 인형"
        value={petData.favorites.join(", ")}
        handleSetPetInfo={handleSetPetInfoFavorites}
      />

      <TextareaBox
        title="싫어하는 것"
        placeholder="ex. 차 소리"
        value={petData.dislike.join(", ")}
        handleSetPetInfo={handleSetPetInfoDislike}
      />

      <TextareaBox
        title="개인기"
        placeholder="ex. 코"
        value={petData.skill.join(", ")}
        handleSetPetInfo={handleSetPetInfoSkill}
      />
    </div>
  );
};
export default UpdatePage;
