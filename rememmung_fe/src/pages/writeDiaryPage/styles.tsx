import styled from "styled-components";

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
    align-items: center;
    width: 100%;
    height: 580px;
    border-radius: 12px;
    background-color: #f6f6f8;

    // 글씨 관련 CSS
    font-size: 18px;
    color: #5d606b;
    line-height: 180%;
    letter-spacing: -0.02em;

    padding: 48px 64px;
    box-sizing: border-box;

    margin: 0 auto;
  `,
  Date: styled.div`
    font-family: "YangJin";
    font-size: 18px;
    font-weight: 800;
    color: #37393d;

    margin-bottom: 24px;
  `,
  Emotion: styled.img`
    width: 140px;
    height: 140px;
  `,
  TextArea: styled.textarea`
    margin-top: 40px;
    padding: 16px 12px 12px 16px;
    background-color: #e8e8eb;
    color: #8a8e99;
    resize: none;
    border: 0;
    border-radius: 12px;
    width: 100%;
    height: 194px;
  `,
};

export default styles;
