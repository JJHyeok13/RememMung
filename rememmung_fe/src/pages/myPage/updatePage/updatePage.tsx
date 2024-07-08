import React, { useEffect, useState } from "react";

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

import styles from "./styles";
import UpdateComponent from "@components/myPage/updatePage/updateComponent";
import { getPetInfo } from "@server/user/api/user";

import { HashLoader } from "react-spinners";

const UpdatePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    setIsLoading(true);
    getPetInfo().then((res) => {
      const data = res.data;
      setPetData({
        species: data.species,
        name: data.name,
        personality: data.personality.split(", "),
        gender: data.gender,
        birthday: data.birthday,
        farewellday: data.farewellday,
        favorites: data.favorites.split(", "),
        dislike: data.dislike.split(", "),
        skill: data.skill.split(", "),
      });
      console.log(res);
    });
    setIsLoading(false);
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

  if (isLoading) {
    return (
      <>
        <HashLoader />
      </>
    );
  }

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
