import BasicLayout from "./layout/BasicLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import StartPage from "./pages/startPage/startPage";
import OnBoardingPage from "./pages/onBoardingPage/onBoardpage";

import MainPage from "./pages/mainPage/mainPage";
import ChatPage from "./pages/chatPage/chatPage";

import WriteMailPage from "./pages/writeMailPage/writeMailPage";
import MailBoxPage from "./pages/mailBoxPage/mailBoxPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/onboard" element={<OnBoardingPage />} />

        <Route element={<BasicLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/gallery" element={<MainPage />} />
          <Route path="/write" element={<WriteMailPage />} />
          <Route path="/mailbox" element={<MailBoxPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
