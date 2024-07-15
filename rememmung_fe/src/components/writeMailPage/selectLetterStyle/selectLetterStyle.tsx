import React from "react";

import PinkLetterIcon from "@assets/writeMailPage/pinkLetterIcon.svg";
import GreenLetterIcon from "@assets/writeMailPage/greenLetterIcon.svg";
import SkyLetterIcon from "@assets/writeMailPage/skyLetterIcon.svg";
import PurpleLetterIcon from "@assets/writeMailPage/purpleLetterIcon.svg";

const SelectLetterStyle: React.FC = () => {
  return (
    <div>
      <img src={PinkLetterIcon} />
      <img src={GreenLetterIcon} />
      <img src={SkyLetterIcon} />
      <img src={PurpleLetterIcon} />
    </div>
  );
};

export default SelectLetterStyle;
