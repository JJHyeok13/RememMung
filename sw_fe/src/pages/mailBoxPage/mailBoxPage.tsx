import React from "react";

import styles from "./styles";

import { dummyData } from "./dummyData";
import MailList from "../../components/mailBoxPage/mailList/mailList";

const MailBoxPage: React.FC = () => {
  return (
    <styles.Container>
      <styles.ElementBox>
        <MailList mailData={dummyData} />
      </styles.ElementBox>
    </styles.Container>
  );
};

export default MailBoxPage;
