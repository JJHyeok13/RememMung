import React, { useEffect, useState } from "react";
import { getKakaoToken, kakaoLogin } from "@server/user/api/oauth";
import { useNavigate } from "react-router-dom";

import styles from "./styles";

import { HashLoader } from "react-spinners";

const KakaoLoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [kakaoToken, setKakaoToken] = useState("");

  const client_id = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  useEffect(() => {
    const fetchKakaoToken = async () => {
      try {
        setLoading(true);
        if (code) {
          const res = await getKakaoToken(client_id, redirect_uri, code);

          // 로컬스토리지에 카카오 토큰 저장
          localStorage.setItem("kakaoToken", res.access_token);

          // 카카오 토큰 값 저장
          setKakaoToken(res.access_token);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchKakaoToken();
  }, []);

  useEffect(() => {
    const getCookie = async () => {
      try {
        setLoading(true);
        if (kakaoToken) {
          const res = await kakaoLogin(kakaoToken);

          console.log(res);

          //if (res.existed) {
          //navigate(`/main`);
          //} else {
          navigate(`/onboarding`);
          //}

          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCookie();
  });

  return (
    <styles.Container>
      <HashLoader size="120px" color="#0075ff" loading={loading} />
    </styles.Container>
  );
};

export default KakaoLoginPage;
