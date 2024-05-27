import React, { useState, useEffect } from "react";
import styles from "./styles";

import { createYear, createMonth, createDay } from "utils/createTime";

import PrevButtonImage from "@assets/onBoardingPage/prevButton.svg";
import AbleNextButtonImage from "@assets/onBoardingPage/ableNextButton.svg";

interface StepFiveProps {
  additionalInfo: {
    gender: string;
    birthday: string;
    farewell: string;
    favorite: string[];
    hate: string[];
    skill: string[];
  };
  setAdditionalInfo: (info: Partial<StepFiveProps["additionalInfo"]>) => void;
  handlePrevStep: () => void;
  handleSubmit: () => void;
}

const StepFive: React.FC<StepFiveProps> = ({
  additionalInfo,
  setAdditionalInfo,
  handlePrevStep,
  handleSubmit,
}) => {
  const [birthdayYear, setBirthdayYear] = useState<string>("");
  const [birthdayMonth, setBirthdayMonth] = useState<string>("");
  const [birthdayDay, setBirthdayDay] = useState<string>("");

  const [farewellYear, setFarewellYear] = useState<string>("");
  const [farewellMonth, setFarewellMonth] = useState<string>("");
  const [farewellDay, setFarewellDay] = useState<string>("");

  useEffect(() => {
    const birthday = `${birthdayYear}-${birthdayMonth}-${birthdayDay}`;
    const farewell = `${farewellYear}-${farewellMonth}-${farewellDay}`;
    setAdditionalInfo({ birthday, farewell });
  }, [
    birthdayYear,
    birthdayMonth,
    birthdayDay,
    farewellYear,
    farewellMonth,
    farewellDay,
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "favorite" || name === "hate" || name === "skill") {
      const list = value.split(",").map((item) => item.trim());
      setAdditionalInfo({ [name]: list });
    } else {
      setAdditionalInfo({ [name]: value });
    }
  };

  return (
    <styles.Container>
      <styles.Title>반려동물의 추가정보를 입력해주세요!</styles.Title>
      <styles.SubTitle>
        선택사항이지만, 대답해주신다면 더 정확한 AI 모델을 얻을 수 있어요
      </styles.SubTitle>

      <styles.TotalInputContainer>
        <styles.InputContainer>
          <h3>성별</h3>
          <styles.Input>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={additionalInfo.gender === "male"}
              onChange={handleChange}
            />
            <label htmlFor="male">남자</label>

            <input
              type="radio"
              name="gender"
              value="female"
              checked={additionalInfo.gender === "female"}
              onChange={handleChange}
            />
            <label htmlFor="female">여자</label>
          </styles.Input>
        </styles.InputContainer>

        <styles.InputContainer>
          <h3>생일</h3>
          <styles.Input>
            <select
              name="birthdayYear"
              value={birthdayYear}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setBirthdayYear(e.target.value)
              }
            >
              <option value="">년</option>
              {createYear()}
            </select>{" "}
            년
            <select
              name="birthdayMonth"
              value={birthdayMonth}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setBirthdayMonth(e.target.value)
              }
            >
              <option value="">월</option>
              {createMonth()}
            </select>{" "}
            월
            <select
              name="birthdayDay"
              value={birthdayDay}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setBirthdayDay(e.target.value)
              }
            >
              <option value="">일</option>
              {createDay()}
            </select>{" "}
            일
          </styles.Input>
        </styles.InputContainer>

        <styles.InputContainer>
          <h3>이별한 날짜</h3>
          <styles.Input>
            <select
              name="farewellYear"
              value={farewellYear}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFarewellYear(e.target.value)
              }
            >
              <option value="">년</option>
              {createYear()}
            </select>{" "}
            년
            <select
              name="farewellMonth"
              value={farewellMonth}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFarewellMonth(e.target.value)
              }
            >
              <option value="">월</option>
              {createMonth()}
            </select>{" "}
            월
            <select
              name="farewellDay"
              value={farewellDay}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFarewellDay(e.target.value)
              }
            >
              <option value="">일</option>
              {createDay()}
            </select>{" "}
            일
          </styles.Input>
        </styles.InputContainer>

        <styles.InputContainer>
          <h3>좋아하는 것</h3>
          <styles.Textarea
            placeholder="내용을 입력해주세요"
            name="favorite"
            value={additionalInfo.favorite.join(", ")}
            onChange={handleChange}
          />
        </styles.InputContainer>

        <styles.InputContainer>
          <h3>싫어하는 것</h3>
          <styles.Textarea
            placeholder="내용을 입력해주세요"
            name="hate"
            value={additionalInfo.hate.join(", ")}
            onChange={handleChange}
          />
        </styles.InputContainer>

        <styles.InputContainer>
          <h3>개인기</h3>
          <styles.Textarea
            placeholder="내용을 입력해주세요"
            name="skill"
            value={additionalInfo.skill.join(", ")}
            onChange={handleChange}
          />
        </styles.InputContainer>
      </styles.TotalInputContainer>

      <styles.PrevButton src={PrevButtonImage} onClick={handlePrevStep} />

      <styles.NextButton src={AbleNextButtonImage} onClick={handleSubmit} />
    </styles.Container>
  );
};

export default StepFive;
