import React from "react";

import styles from "./styles";

const InputContainer: React.FC = () => {
  return (
    <styles.Container>
      <styles.TitleInput type="text" placeholder="제목" />
      <styles.ContentInput placeholder="내용" />
    </styles.Container>
  );
};

export default InputContainer;
