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

  const isActive = (paths: string[]) => {
    return paths.includes(location.pathname);
  };

  const navItems = [
    {
      paths: ["/main"],
      icon: BrownHomeIcon,
      grayIcon: GrayHomeIcon,
      label: "홈",
    },
    {
      paths: ["/chat"],
      icon: BrownChattingIcon,
      grayIcon: GrayChattingIcon,
      label: "채팅",
    },
    {
      paths: ["/photo"],
      icon: BrownGalleryIcon,
      grayIcon: GrayGalleryIcon,
      label: "갤러리",
    },
    {
      paths: ["/writemail"],
      icon: BrownLetterIcon,
      grayIcon: GrayLetterIcon,
      label: "편지쓰기",
    },
    {
      paths: ["/mailbox"],
      icon: BrownMailBoxIcon,
      grayIcon: GrayMailBoxIcon,
      label: "우편함",
    },
    {
      paths: ["/diary", "/writediary"],
      icon: BrownDiaryIcon,
      grayIcon: GrayDiaryIcon,
      label: "멍일기",
    },
  ];

  return (
    <div className="flex flex-row items-center mb-6 mx-auto w-5/6">
      {navItems.map(({ paths, icon, grayIcon, label }) => (
        <Link
          key={paths[0]}
          to={paths[0]}
          className="relative flex flex-col items-center w-12 mr-6"
        >
          {isActive(paths) && (
            <div className="w-2 h-2 rounded-full bg-brown-500 absolute top-[-10px]" />
          )}
          <img className="w-6" src={isActive(paths) ? icon : grayIcon} />
          <div
            className={`${
              isActive(paths) ? "text-brown-500" : "text-[#AAAEBB]"
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
