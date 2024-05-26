import styled from "styled-components";
import { Link } from "react-router-dom";

const styles = {
  Container: styled.div`
    width: 1080px;
    margin-top: 26px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
  `,
  StyleLink: styled(Link)<{ active: boolean }>`
    font-size: 12px;
    text-align: center;
    border-bottom: ${({ active }) => (active ? "6px solid #946233" : "none")};
    text-decoration: none;
    margin-right: 56px;
    margin-bottom: 27px;
  `,
};

export default styles;
