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
    flex-direction: column;
    justify-content: center;
    width: 1080px;
    height: 551px;
    border-radius: 12px;
    padding: 32px 16px 32px 64px;
    background-color: #f4f4f4;
    overflow: hidden;

    margin: 0 auto;
  `,
  LowerContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ButtonContainer: styled.div`
    display: flex;
    align-items: center;

    > * {
      margin-left: 12px;
    }
  `,
  WriteButton: styled.div`
    cursor: pointer;
    padding: 10px 16px;
    background-color: #946233;
    color: #ffffff;
    border-radius: 8px;
  `,
  DeleteButton: styled.div`
    cursor: pointer;
    padding: 10px 16px;
    background-color: #8a8e99;
    color: #ffffff;
    border-radius: 8px;
  `,
};

export default styles;
