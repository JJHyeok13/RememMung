import styled from "styled-components";

const styles = {
  Container: styled.div`
    position: fixed; /* Updated to fixed */
    bottom: 29px;
    width: 1080px; /* Ensure it fits within the container width */
    display: flex;
    align-items: center;
    margin: 0 auto; /* Center horizontally */
  `,

  StyleInput: styled.input`
    font-size: 16px;
    width: 988px;
    height: 51px;
    box-sizing: border-box;
    padding: 16px;
    border-radius: 12px;
    border: 0;
    background-color: rgba(255, 255, 255, 0.8);

    &::placeholder {
      font-size: 16px;
      font-weight: 500;
      color: #898989;
    }
  `,

  SendButton: styled.img`
    margin-left: 24px;
    cursor: pointer;
  `,
};

export default styles;
