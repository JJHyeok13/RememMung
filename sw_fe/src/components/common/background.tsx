import React from "react";
import styled from "styled-components";

const WhiteBox = styled.div`
  width: 860px;
  height: 768px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

const TopBrown = styled.div`
  width: 860px;
  height: 72px;
  background-color: #ebe8e5;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 2px 4px rgba(37, 37, 37, 0.25);
`;

const Background: React.FC = () => {
  return (
    <WhiteBox>
      <TopBrown>
        <img />
        <img />
        <img />
      </TopBrown>
    </WhiteBox>
  );
};

export default Background;
