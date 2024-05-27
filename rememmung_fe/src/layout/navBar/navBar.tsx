import React from "react";
import { useLocation } from "react-router-dom";

import HomeIcon from "../../assets/navBar/homeIcon.svg";
import ChattingIcon from "../../assets/navBar/chattingIcon.svg";
import GalleryIcon from "../../assets/navBar/galleryIcon.svg";
import LetterIcon from "../../assets/navBar/letterIcon.svg";
import MailBoxIcon from "../../assets/navBar/mailBoxIcon.svg";

import styles from "./styles";

const NavBar: React.FC = () => {
  const location = useLocation();

  const isHome = location.pathname === "/main";
  const isChat = location.pathname === "/chat";
  const isGallery = location.pathname === "/gallery";
  const isWrite = location.pathname === "/write";
  const isMailbox = location.pathname === "/mailbox";

  return (
    <styles.Container>
      <styles.StyleLink to="/main" $active={isHome}>
        {isHome && <styles.Dot />}
        <img src={HomeIcon} />
        <div style={{ color: isHome ? "#946233" : "#AAAEBB" }}>홈</div>
      </styles.StyleLink>

      <styles.StyleLink to="/chat" $active={isChat}>
        {isChat && <styles.Dot />}
        <img src={ChattingIcon} />
        <div style={{ color: isChat ? "#946233" : "#AAAEBB" }}>채팅</div>
      </styles.StyleLink>

      <styles.StyleLink to="/gallery" $active={isGallery}>
        {isGallery && <styles.Dot />}
        <img src={GalleryIcon} />
        <div style={{ color: isGallery ? "#946233" : "#AAAEBB" }}>갤러리</div>
      </styles.StyleLink>

      <styles.StyleLink to="/write" $active={isWrite}>
        {isWrite && <styles.Dot />}
        <img src={LetterIcon} />
        <div style={{ color: isWrite ? "#946233" : "#AAAEBB" }}>편지쓰기</div>
      </styles.StyleLink>

      <styles.StyleLink to="/mailbox" $active={isMailbox}>
        {isMailbox && <styles.Dot />}
        <img src={MailBoxIcon} />
        <div style={{ color: isMailbox ? "#946233" : "#AAAEBB" }}>우편함</div>
      </styles.StyleLink>
    </styles.Container>
  );
};

export default NavBar;
