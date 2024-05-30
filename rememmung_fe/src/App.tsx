import BasicLayout from "./layout/BasicLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import StartPage from "./pages/startPage/startPage";
import KakaoLoginPage from "@pages/socialLoginPage/kakaoLoginPage";
import OnBoardingPage from "./pages/onBoardingPage/onBoardpage";

import MainPage from "./pages/mainPage/mainPage";
import MyPage from "./pages/myPage/myPage";

import ChatPage from "./pages/chatPage/chatPage";
import GalleryPage from "./pages/galleryPage/galleryPage";
import WriteMailPage from "./pages/writeMailPage/writeMailPage";
import MailBoxPage from "./pages/mailBoxPage/mailBoxPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />

        <Route path="/oauth2/kakao" element={<KakaoLoginPage />} />
        <Route path="/onboard" element={<OnBoardingPage />} />

        <Route element={<BasicLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />

          <Route path="/chat" element={<ChatPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/write" element={<WriteMailPage />} />
          <Route path="/mailbox" element={<MailBoxPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;