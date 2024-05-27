import styled from "styled-components";

const styles = {
  Container: styled.div`
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
    height: 551px;
    border-radius: 12px;
    background-color: #f4f4f4;

    // 글씨 관련 CSS
    font-size: 18px;
    color: #5d606b;
    line-height: 180%;
    letter-spacing: -0.02em;

    padding: 32px 32px 32px 32px;
    box-sizing: border-box;

    margin: 0 auto;
  `,
};

export default styles;
