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
    align-items: center;
    width: 100%;
    height: 551px;
    border-radius: 12px;
    background-color: #f4f4f4;
    overflow: hidden;

    margin: 0 auto;
  `,
  LowerContainer: styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
  `,
  SendButton: styled.div`
    padding: 12px 32px;
    background-color: #946233;
    color: #ffffff;
    border-radius: 12px;
  `,
};

export default styles;
