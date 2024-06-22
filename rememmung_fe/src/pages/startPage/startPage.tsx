import React from "react";

import KakaoLoginImage from "@assets/startPage/kakaoButton.svg";
import NaverLoginImage from "@assets/startPage/naverButton.svg";

import { test } from "@server/api/content/test";

import styles from "./styles";

const StartPage: React.FC = () => {
  const kakao_client_id = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const kakao_redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  // const naver_client_id = import.meta.env.VITE_NAVER_REST_API_KEY;
  // const naver_redirect_uri = import.meta.env.VITE_NAVER_REDIRECT_URI;
  // const naver_state = import.meta.env.VITE_NAVER_STATE_STRING;

  const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao_client_id}&redirect_uri=${kakao_redirect_uri}`;
  // const naverLoginURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naver_client_id}&state=${naver_state}&redirect_uri=${naver_redirect_uri}`

  return (
    <styles.Background>
      <styles.Gradation>
        <styles.Container>
          <styles.Title>당신의 건강한 이별을 위해</styles.Title>
          <b>
            <styles.Title>리멤멍이 함께할게요!</styles.Title>
          </b>
          <styles.Subtitle>
            리멤멍은 생성형 AI를 활용한 반려동물 추억 회상 서비스입니다.
          </styles.Subtitle>

          <styles.ButtonContainer>
            <a href={kakaoLoginURL}>
              <styles.Button src={KakaoLoginImage} />
            </a>
            <styles.Button src={NaverLoginImage} />
          </styles.ButtonContainer>

          <div onClick={test}>테스트</div>
        </styles.Container>
      </styles.Gradation>
    </styles.Background>
  );
};

export default StartPage;
