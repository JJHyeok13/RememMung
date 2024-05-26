import BasicLayout from "./layout/BasicLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import StartPage from "./pages/startPage/startPage";
import OnBoardingPage from "./pages/onBoardingPage/onBoardpage";

import MainPage from "./pages/mainPage/mainPage";
import MailBoxPage from "./pages/mailBoxPage/mailBoxPage";
import WriteMailPage from "./pages/writeMailPage/writeMailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/onboard" element={<OnBoardingPage />} />

        <Route element={<BasicLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/chat" element={<MainPage />} />
          <Route path="/mailbox" element={<MailBoxPage />} />
          <Route path="/write" element={<WriteMailPage />} />
          <Route path="/mypage" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
