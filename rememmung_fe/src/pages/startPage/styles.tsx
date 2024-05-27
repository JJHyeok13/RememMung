import styled from "styled-components";

import BackgroundImage from "../../assets/startPage/background.svg";

const styles = {
  Background: styled.div`
    background: url(${BackgroundImage});
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
  `,

  Gradation: styled.div`
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.42)
      ),
      linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));
    background-blend-mode: multiply;
    width: 100vw;
    height: 100vh;
  `,

  Container: styled.div`
    position: fixed;
    bottom: 200px;
    right: 100px;
    text-align: right;
    color: white;
  `,

  Title: styled.div`
    font-size: 28px;
    margin-bottom: 8px;
  `,

  Subtitle: styled.div`
    font-size: 18px;
    margin-top: 4px;
    margin-bottom: 32px;
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `,

  Button: styled.img`
    display: flex;
    width: 184px;
    height: 45px;
    cursor: pointer;

    &:first-child {
      margin-bottom: 12px;
    }
  `,
};

export default styles;
