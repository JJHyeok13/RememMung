import React, { useEffect, useState } from "react";
import { createYear, createMonth, createDay } from "utils/createTime";
import styles from "./styles";

interface UpdateComponentProps {
  petData: {
    species: string;
    name: string;
    personality: string[];
    gender: string;
    birthday: string;
    farewellday: string;
    favorites: string[];
    dislike: string[];
    skill: string[];
  };
  setGender: (gender: string) => void;
  setBirthday: (birthday: string) => void;
  setFarewellday: (farewellday: string) => void;
  setFavorites: (favorites: string[]) => void;
  setDislike: (dislike: string[]) => void;
  setSkill: (skill: string[]) => void;
}

const UpdateComponent: React.FC<UpdateComponentProps> = ({
  petData,
  setGender,
  setBirthday,
  setFarewellday,
  setFavorites,
  setDislike,
  setSkill,
}) => {
  const parseDate = (dateString: string) => {
    if (!dateString) return { year: "", month: "", day: "" };
    const [year, month, day] = dateString.split("T")[0].split("-");
    return { year, month, day };
  };

  const {
    year: birthdayYear,
    month: birthdayMonth,
    day: birthdayDay,
  } = parseDate(petData.birthday);
  const {
    year: farewellYear,
    month: farewellMonth,
    day: farewellDay,
  } = parseDate(petData.farewellday);

  const [selectedBirthdayYear, setSelectedBirthdayYear] =
    useState<string>(birthdayYear);
  const [selectedBirthdayMonth, setSelectedBirthdayMonth] =
    useState<string>(birthdayMonth);
  const [selectedBirthdayDay, setSelectedBirthdayDay] =
    useState<string>(birthdayDay);

  const [selectedFarewellYear, setSelectedFarewellYear] =
    useState<string>(farewellYear);
  const [selectedFarewellMonth, setSelectedFarewellMonth] =
    useState<string>(farewellMonth);
  const [selectedFarewellDay, setSelectedFarewellDay] =
    useState<string>(farewellDay);

  const [selectedGender, setSelectedGender] = useState<string>(petData.gender);
  const [selectedFavorites, setSelectedFavorites] = useState<string[]>(
    petData.favorites
  );
  const [selectedDislike, setSelectedDislike] = useState<string[]>(
    petData.dislike
  );
  const [selectedSkill, setSelectedSkill] = useState<string[]>(petData.skill);

  useEffect(() => {
    setSelectedGender(petData.gender);
    setSelectedFavorites(petData.favorites);
    setSelectedDislike(petData.dislike);
    setSelectedSkill(petData.skill);

    const { year, month, day } = parseDate(petData.birthday);
    setSelectedBirthdayYear(year);
    setSelectedBirthdayMonth(month);
    setSelectedBirthdayDay(day);

    const farewell = parseDate(petData.farewellday);
    setSelectedFarewellYear(farewell.year);
    setSelectedFarewellMonth(farewell.month);
    setSelectedFarewellDay(farewell.day);
  }, [petData]);

  const handleChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(e.target.value);
    setGender(e.target.value);
  };

  const handleChangeFavorites = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const favorites = e.target.value.split(", ").map((item) => item.trim());
    setSelectedFavorites(favorites);
    setFavorites(favorites);
  };

  const handleChangeDislike = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const dislike = e.target.value.split(", ").map((item) => item.trim());
    setSelectedDislike(dislike);
    setDislike(dislike);
  };

  const handleChangeSkill = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const skill = e.target.value.split(", ").map((item) => item.trim());
    setSelectedSkill(skill);
    setSkill(skill);
  };

  useEffect(() => {
    if (selectedBirthdayYear && selectedBirthdayMonth && selectedBirthdayDay) {
      setBirthday(
        `${selectedBirthdayYear}-${selectedBirthdayMonth}-${selectedBirthdayDay}`
      );
    }
  }, [
    selectedBirthdayYear,
    selectedBirthdayMonth,
    selectedBirthdayDay,
    setBirthday,
  ]);

  useEffect(() => {
    if (selectedFarewellYear && selectedFarewellMonth && selectedFarewellDay) {
      setFarewellday(
        `${selectedFarewellYear}-${selectedFarewellMonth}-${selectedFarewellDay}`
      );
    }
  }, [
    selectedFarewellYear,
    selectedFarewellMonth,
    selectedFarewellDay,
    setFarewellday,
  ]);

  return (
    <styles.TotalInputContainer>
      <styles.InputContainer>
        <styles.InputTitle>성별</styles.InputTitle>
        <styles.Input>
          <styles.RadioInput
            type="radio"
            name="gender"
            value="MALE"
            checked={selectedGender === "MALE"}
            onChange={handleChangeGender}
          />
          <label htmlFor="MALE">남자</label>

          <styles.RadioInput
            type="radio"
            name="gender"
            value="FEMALE"
            checked={selectedGender === "FEMALE"}
            onChange={handleChangeGender}
          />
          <label htmlFor="FEMALE">여자</label>
        </styles.Input>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>생일</styles.InputTitle>
        <styles.Input>
          <styles.SelectInput
            name="birthdayYear"
            value={selectedBirthdayYear}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedBirthdayYear(e.target.value)
            }
          >
            <option value="" />
            {createYear()}
          </styles.SelectInput>
          <div>년</div>
          <styles.SelectInput
            name="birthdayMonth"
            value={selectedBirthdayMonth}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedBirthdayMonth(e.target.value)
            }
          >
            <option value="" />
            {createMonth()}
          </styles.SelectInput>
          <div>월</div>
          <styles.SelectInput
            name="birthdayDay"
            value={selectedBirthdayDay}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedBirthdayDay(e.target.value)
            }
          >
            <option value="" />
            {createDay()}
          </styles.SelectInput>
          <div>일</div>
        </styles.Input>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>이별한 날짜</styles.InputTitle>
        <styles.Input>
          <styles.SelectInput
            name="farewellYear"
            value={selectedFarewellYear}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedFarewellYear(e.target.value)
            }
          >
            <option value="" />
            {createYear()}
          </styles.SelectInput>
          <div>년</div>
          <styles.SelectInput
            name="farewellMonth"
            value={selectedFarewellMonth}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedFarewellMonth(e.target.value)
            }
          >
            <option value="" />
            {createMonth()}
          </styles.SelectInput>
          <div>월</div>
          <styles.SelectInput
            name="farewellDay"
            value={selectedFarewellDay}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedFarewellDay(e.target.value)
            }
          >
            <option value="" />
            {createDay()}
          </styles.SelectInput>
          <div>일</div>
        </styles.Input>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>좋아하는 것</styles.InputTitle>
        <styles.Textarea
          placeholder="내용을 입력해주세요"
          name="favorite"
          value={selectedFavorites.join(", ")}
          onChange={handleChangeFavorites}
        />
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>싫어하는 것</styles.InputTitle>
        <styles.Textarea
          placeholder="내용을 입력해주세요"
          name="hate"
          value={selectedDislike.join(", ")}
          onChange={handleChangeDislike}
        />
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>개인기</styles.InputTitle>
        <styles.Textarea
          placeholder="내용을 입력해주세요"
          name="skill"
          value={selectedSkill.join(", ")}
          onChange={handleChangeSkill}
        />
      </styles.InputContainer>
    </styles.TotalInputContainer>
  );
};

export default UpdateComponent;
