import axios from "axios";

import { PostAxiosInstance } from "@axios/axios.method";

export const getKakaoToken = async (
  client_id: string,
  redirect_uri: string,
  code: string
) => {
  const res = await axios.post(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );
  return res.data;
};

export const kakaoLogin = async (accessToken: string) => {
  const res = await PostAxiosInstance(`http://localhost:8080/api/auth/kakao`, {
    accessToken: accessToken,
  });
  return res.data;
};
