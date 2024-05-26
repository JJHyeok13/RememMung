import React from "react";

import useBodyOverflowHidden from "../../hooks/useBodyOverflowHidden";

import styles from "./styles";

const MainPage: React.FC = () => {
  useBodyOverflowHidden();

  return (
    <styles.Container>
      <styles.WhiteBox>
        <div>반가워요!</div>
        <div>
          리멤멍은 반려동물과의 이별을 하게된 사람들을 위해 과거의 추억 회상을
          통해
        </div>
        <div>이별을 준비하고 도와주는 것을 목표로 제작된 서비스에요..</div>
        <div>당신의 반려동물과 건강한 이별을 리멤멍이 도와줄게요!</div>
        <br />
        <br />
      </styles.WhiteBox>
    </styles.Container>
  );
};

export default MainPage;
