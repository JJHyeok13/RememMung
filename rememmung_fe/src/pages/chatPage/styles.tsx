import styled from "styled-components";

import PetImageExample from "@assets/chatPage/background.png";

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 84%;
    margin: 0 auto;
  `,

  WhiteBox: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 580px;
    border-radius: 12px;
    background-image: url(${PetImageExample});
    margin: 0 auto;
  `,
};

export default styles;
