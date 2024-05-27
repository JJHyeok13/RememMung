import React from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar/navBar";
import styled from "styled-components";

import BackgroundImage from "@assets/background.svg";

const Background = styled.div`
  background: url(${BackgroundImage});
  height: 100%;
`;

const BasicLayout: React.FC = () => {
  return (
    <Background>
      <Header />
      <NavBar />
      <Outlet />
    </Background>
  );
};

export default BasicLayout;
