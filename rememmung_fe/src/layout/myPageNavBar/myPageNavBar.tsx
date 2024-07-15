import React from "react";
import { Link, useLocation } from "react-router-dom";

const MyPageNavBar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { id: 1, path: "/mypage/mymail", label: "내가 쓴 편지" },
    { id: 2, path: "/mypage/update", label: "반려동물\n정보수정" },
    { id: 3, path: "/mypage/deletedata", label: "데이터 삭제" },
    { id: 4, path: "/mypage/delete", label: "회원탈퇴" },
  ];

  return (
    <nav className="flex flex-col bg-[#f6f6f8] py-12 px-8 rounded-xl h-fit items-center">
      {navItems.map((nav) => (
        <Link to={nav.path} key={nav.id}>
          <li
            className={`${
              isActive(nav.path)
                ? "text-brown-500 font-semibold"
                : "text-[#afafaf] font-normal"
            } ${
              nav.id !== navItems.length ? "pb-12" : ""
            } list-none text-lg hover:text-brown-500 hover:font-semibold`}
          >
            {nav.label.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                {idx !== nav.label.split("\n").length - 1 && <br />}
              </span>
            ))}
          </li>
        </Link>
      ))}
    </nav>
  );
};

export default MyPageNavBar;
