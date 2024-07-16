import React from "react";
import Header from "./header/header";
import MyPageNavBar from "./myPageNavBar/myPageNavBar";

import { Outlet } from "react-router-dom";

const MyPageLayout: React.FC = () => {
  return (
    <div className="h-screen sm:bg-smStartPage md:bg-mdStartPage xl:bg-xlStartPage xxl:bg-xxlStartPage">
      <Header />
      <div className="w-5/6 mx-auto flex flex-row">
        <MyPageNavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MyPageLayout;
