import React, { useEffect, useState } from "react";

import styles from "./styles";
import UpdateComponent from "@components/myPage/updatePage/updateComponent";
import { getPetInfo } from "@server/user/api/user";

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
      setPetData({
        species: res.species,
        name: res.name,
        personality: res.personality ? res.personality.split(", ") : [],
        gender: res.gender,
        birthday: res.birthday,
        farewellday: res.farewellday || "",
        favorites: res.favorites ? res.favorites.split(", ") : [],
        dislike: res.dislike ? res.dislike.split(", ") : [],
        skill: res.skill ? res.skill.split(", ") : [],
      });
      console.log(petData);
    });
  }, []);

  // const setType = (species: string) => {
  //   setPetData((prev) => ({ ...prev, species }));
  // };

  // const setName = (name: string) => {
  //   setPetData((prev) => ({ ...prev, name }));
  // };

  // const setPetCharacter = (personality: string[]) => {
  //   setPetData((prev) => ({ ...prev, personality }));
  // };

  const setGender = (gender: string) => {
    setPetData((prev) => ({ ...prev, gender }));
  };

  const setBirthday = (birthday: string) => {
    setPetData((prev) => ({ ...prev, birthday }));
  };

  const setFarewellday = (farewellday: string) => {
    setPetData((prev) => ({ ...prev, farewellday }));
  };

  const setFavorites = (favorites: string[]) => {
    setPetData((prev) => ({ ...prev, favorites }));
  };

  const setDislike = (dislike: string[]) => {
    setPetData((prev) => ({ ...prev, dislike }));
  };

  const setSkill = (skill: string[]) => {
    setPetData((prev) => ({ ...prev, skill }));
  };

  return (
    <styles.Container>
      <UpdateComponent
        petData={petData}
        setGender={setGender}
        setBirthday={setBirthday}
        setFarewellday={setFarewellday}
        setFavorites={setFavorites}
        setDislike={setDislike}
        setSkill={setSkill}
      />
    </styles.Container>
  );
};
export default UpdatePage;
