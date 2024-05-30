import React, { useEffect, useState } from "react";
import { getKakaoToken, kakaoLogin } from "@server/api/oauth";
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
          setKakaoToken(res.access_token);
          localStorage.setItem("kakaoToken", res.access_token);

          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchKakaoToken();
  }, []);

  useEffect(() => {
    const getJWTToken = async () => {
      try {
        setLoading(true);
        if (kakaoToken) {
          const res = await kakaoLogin(kakaoToken);
          localStorage.setItem("accessToken", res.access_token);

          setLoading(false);
          navigate("/onboarding");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getJWTToken();
  });

  return (
    <>
      <styles.Container>
        <HashLoader size="120px" color="#0075ff" loading={loading} />
      </styles.Container>
    </>
  );
};

export default KakaoLoginPage;
