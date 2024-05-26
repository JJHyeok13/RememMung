import styled from "styled-components";
import { Link } from "react-router-dom";

const styles = {
  Container: styled.div`
    width: 1080px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 32px 0;
  `,
  StyledLink: styled(Link)`
    text-decoration: none;
  `,
  LeftContainer: styled.div`
    display: flex;
    font-family: "SEBANG Gothic";
    color: #946233;
    align-items: center;
  `,
  LogoImage: styled.img`
    margin-right: 10px;
  `,
  RightContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  Button: styled.div`
    cursor: pointer;
    padding-left: 16px;

    &:hover {
      color: #946233;
      font-weight: 700;
    }
  `,
};

export default styles;
