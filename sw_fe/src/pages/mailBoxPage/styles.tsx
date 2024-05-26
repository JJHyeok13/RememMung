import styled from "styled-components";

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 1080px;
    margin: 0 auto;
  `,

  ElementBox: styled.div`
    display: flex;
    justify-content: center;
    width: 1080px;
    height: 551px;
    border-radius: 12px;
    background-color: #f4f4f4;
    overflow: hidden;

    margin: 0 auto;
  `,

  PetImage: styled.img`
    width: 1080px;
    height: 551px;
    border-radius: 12px;
  `,
};

export default styles;
