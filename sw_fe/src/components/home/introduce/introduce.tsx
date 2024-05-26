import React from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 42px;
  letter-spacing: -0.5px;
  color: #5d606b;
`;

const Introduce: React.FC = () => {
  return (
    <Container>
      <p>반가워요</p>
      <p>
        리멤멍은 반려동물과의 이별을 하게된 사람들을 위해 과거의 추억 회상을
        통해
      </p>
      <p>이별을 준비하고 도와주는 것을 목표로 제작된 서비스에요..</p>
      <p>당신의 반려동물과 건강한 이별을 리멤멍이 도와줄게요!</p>

      <br />
      <p>앞으로 나올 질문에 성실하게 대답해주시면,</p>
      <p>더욱 건강한 이별이 가능해요!</p>

      <br />
      <p>당신의 건강한 이별을 위해 리멤멍이 항상 곁에 있을게요!</p>

      <br />
      <p>마음의 준비가 되었다면, 다음으로 넘어가주세요...</p>
    </Container>
  );
};

export default Introduce;
