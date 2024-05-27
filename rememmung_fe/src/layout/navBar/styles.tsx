import styled from "styled-components";
import { Link } from "react-router-dom";

const styles = {
  Container: styled.div`
    width: 84%;
    margin-top: 26px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
  `,
  StyleLink: styled(Link)<{ $active: boolean }>`
    width: 50px;
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    margin-right: 24px;
    margin-bottom: 27px;
    position: relative;
  `,
  Dot: styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #946233;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  `,
};

export default styles;
