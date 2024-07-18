import styled from "styled-components";

import Green from "@assets/mailBoxPage/Frame-1.png";
import Purple from "@assets/mailBoxPage/Frame-2.png";
import Pink from "@assets/mailBoxPage/Frame.png";
import Sky from "@assets/mailBoxPage/Frame-3.png";

const getBackgroundImage = (letterType: string) => {
  switch (letterType) {
    case "green":
      return Green;
    case "purple":
      return Purple;
    case "pink":
      return Pink;
    case "sky":
      return Sky;
    default:
      return Purple;
  }
};

const styles = {
  Background: styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(3px);
    z-index: 1000;
  `,
  Letter: styled.div<{ letterType: string }>`
    background-image: url(${(props) => getBackgroundImage(props.letterType)});
    background-repeat: no-repeat;
    color: #37393d;

    margin: 0 auto;

    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 710px;
    height: 401.5px;
  `,
  Content: styled.div`
    font-family: "SBAggro";
    line-height: 220%;

    width: 534px;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
  `,
  Receiver: styled.div`
    padding-top: 10px;
    padding-bottom: 50px;
  `,
  Sender: styled.div`
    margin-top: 40px;
    text-align: right;
  `,
  Button: styled.div`
    margin-top: 24px;

    width: fit-content;

    font-size: 14px;
    font-weight: 600;

    background-color: #ffffff;
    color: #232323;
    padding: 10px 16px;

    border-radius: 8px;

    cursor: pointer;
  `,
};

export default styles;
