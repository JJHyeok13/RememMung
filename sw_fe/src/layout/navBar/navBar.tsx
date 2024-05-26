import React from "react";
import { useLocation } from "react-router-dom";

import { RiHome4Fill } from "react-icons/ri";
import { PiChatCircleTextFill } from "react-icons/pi";
import { PiMailboxFill } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

import styles from "./styles";

const NavBar: React.FC = () => {
  const location = useLocation();

  const isHome = location.pathname === "/main";
  const isChat = location.pathname === "/chat";
  const isMailbox = location.pathname === "/mailbox";
  const isWrite = location.pathname === "/write";
  const isMypage = location.pathname === "/mypage";

  return (
    <styles.Container>
      <styles.StyleLink to="/main" active={isHome}>
        <RiHome4Fill size={24} color={isHome ? "#946233" : "#AAAEBB"} />
        <div style={{ color: isHome ? "#946233" : "#AAAEBB" }}>홈</div>
      </styles.StyleLink>

      <styles.StyleLink to="/chat" active={isChat}>
        <PiChatCircleTextFill
          size={24}
          color={isChat ? "#946233" : "#AAAEBB"}
        />
        <div style={{ color: isChat ? "#946233" : "#AAAEBB" }}>채팅</div>
      </styles.StyleLink>

      <styles.StyleLink to="/mailbox" active={isMailbox}>
        <PiMailboxFill size={24} color={isMailbox ? "#946233" : "#AAAEBB"} />
        <div style={{ color: isMailbox ? "#946233" : "#AAAEBB" }}>우편함</div>
      </styles.StyleLink>

      <styles.StyleLink to="/write" active={isWrite}>
        <LuMail size={24} color={isWrite ? "#946233" : "#AAAEBB"} />
        <div style={{ color: isWrite ? "#946233" : "#AAAEBB" }}>편지쓰기</div>
      </styles.StyleLink>

      <styles.StyleLink to="/mypage" active={isMypage}>
        <CgProfile size={24} color={isMypage ? "#946233" : "#AAAEBB"} />
        <div style={{ color: isMypage ? "#946233" : "#AAAEBB" }}>
          마이페이지
        </div>
      </styles.StyleLink>
    </styles.Container>
  );
};

export default NavBar;
