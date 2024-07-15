import React from "react";
import { Link, useLocation } from "react-router-dom";

import BrownHomeIcon from "@assets/navBar/brownHomeIcon.svg";
import GrayHomeIcon from "@assets/navBar/grayHomeIcon.svg";

import BrownChattingIcon from "@assets/navBar/brownChattingIcon.svg";
import GrayChattingIcon from "@assets/navBar/grayChattingIcon.svg";

import BrownGalleryIcon from "@assets/navBar/brownGalleryIcon.svg";
import GrayGalleryIcon from "@assets/navBar/grayGalleryIcon.svg";

import BrownLetterIcon from "@assets/navBar/brownLetterIcon.svg";
import GrayLetterIcon from "@assets/navBar/grayLetterIcon.svg";

import BrownMailBoxIcon from "@assets/navBar/brownMailBoxIcon.svg";
import GrayMailBoxIcon from "@assets/navBar/grayMailBoxIcon.svg";

import BrownDiaryIcon from "@assets/navBar/brownDiaryIcon.svg";
import GrayDiaryIcon from "@assets/navBar/grayDiaryIcon.svg";

const NavBar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return path.includes(location.pathname);
  };

  const navItems = [
    { path: "/main", icon: BrownHomeIcon, grayIcon: GrayHomeIcon, label: "홈" },
    {
      path: "/chat",
      icon: BrownChattingIcon,
      grayIcon: GrayChattingIcon,
      label: "채팅",
    },
    {
      path: "/gallery",
      icon: BrownGalleryIcon,
      grayIcon: GrayGalleryIcon,
      label: "갤러리",
    },
    {
      path: "/write",
      icon: BrownLetterIcon,
      grayIcon: GrayLetterIcon,
      label: "편지쓰기",
    },
    {
      path: "/mailbox",
      icon: BrownMailBoxIcon,
      grayIcon: GrayMailBoxIcon,
      label: "우편함",
    },
    {
      path: "/diary",
      icon: BrownDiaryIcon,
      grayIcon: GrayDiaryIcon,
      label: "멍일기",
    },
  ];

  return (
    <div className="flex flex-row items-center mb-6 mx-auto w-5/6">
      {navItems.map(({ path, icon, grayIcon, label }) => (
        <Link
          key={path}
          to={path}
          className="relative flex flex-col items-center w-12 mr-6"
        >
          {isActive(path) && (
            <div className="w-2 h-2 rounded-full bg-brown-500 absolute top-[-10px]" />
          )}
          <img className="w-6" src={isActive(path) ? icon : grayIcon} />
          <div
            className={`${
              isActive(path) ? "text-brown-500" : "text-[#AAAEBB]"
            } text-xs text-center`}
          >
            {label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
