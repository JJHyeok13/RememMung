import styled from "styled-components";

const styles = {
  Container: styled.div`
    font-family: "Pretendard";

    display: flex;
    flex-direction: column;
    width: 892px;
  `,

  WhiteBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 892px;
    height: 551px;
    border-radius: 12px;
    background-color: #f6f6f8;

    // 글씨 관련 CSS
    font-size: 18px;
    color: #5d606b;
    line-height: 180%;
    letter-spacing: -0.02em;

    padding: 32px 16px 32px 32px;
    box-sizing: border-box;

    margin: 0 auto;
  `,
};

export default styles;
