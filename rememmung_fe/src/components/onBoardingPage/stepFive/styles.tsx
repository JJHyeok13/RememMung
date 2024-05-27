import styled from "styled-components";

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  `,
  Title: styled.h3`
    font-size: 24px;
    color: #53555c;
    letter-spacing: -1px;
  `,
  SubTitle: styled.div`
    font-size: 14px;
    color: #a1a5ad;
    letter-spacing: -1px;
    margin-bottom: 40px;
  `,
  TotalInputContainer: styled.div`
    width: 130%;
    height: calc(100vh - 450px);
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    > * {
      margin-bottom: 48px;
    }
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Input: styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    color: #8a8e99;
  `,
  Textarea: styled.textarea`
    width: 90%;
    height: 118px;
    resize: none;
    margin-top: 8px;
    border: 0;
    border-radius: 8px;
    background-color: #e8e8eb;
    color: #8a8e99;
    padding: 12px 12px 12px 14px;
  `,
  PrevButton: styled.img`
    position: fixed;
    bottom: 400px;
    left: 200px;
    cursor: pointer;
  `,
  NextButton: styled.img`
    position: fixed;
    bottom: 400px;
    right: 200px;
    cursor: pointer;
  `,
};

export default styles;
