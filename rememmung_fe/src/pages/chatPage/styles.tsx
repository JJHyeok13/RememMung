import styled from "styled-components";

import PetImageExample from "@assets/chatPage/background.svg";
//import PetImageExample from "@assets/chatPage/background.png";
//import PetImageExample1680 from "@assets/chatPage/background1680.png";

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
    margin: 0 auto;

    background-image: url(${PetImageExample});
    background-repeat: no-repeat;
  `,
};

export default styles;
