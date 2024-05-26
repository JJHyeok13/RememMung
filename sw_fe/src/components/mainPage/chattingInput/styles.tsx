import styled from "styled-components";

const styles = {
  Container: styled.div`
    margin-top: 22px;
    display: flex;
    align-items: center;
  `,

  StyleInput: styled.input`
    font-size: 16px;
    width: 988px;
    height: 51px;
    box-sizing: border-box;
    padding: 16px;
    border-radius: 12px;
    border: 0;
    background-color: #f9f9f9;

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: #8e8e8e;
    }
  `,

  SendButton: styled.img`
    margin-left: 27px;
    cursor: pointer;
  `,
};

export default styles;
