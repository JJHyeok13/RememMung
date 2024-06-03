import styled from "styled-components";

import PetImageExample from "@assets/chatPage/background.png";

const styles = {
  Container: styled.div`
    font-family: "Pretendard";

    display: flex;
    flex-direction: column;
    width: 84%;
    margin: 0 auto;
  `,

  WhiteBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 580px;
    border-radius: 12px;
    background-image: url(${PetImageExample});
    background-repeat: no-repeat;
    margin: 0 auto;
  `,
};

export default styles;
