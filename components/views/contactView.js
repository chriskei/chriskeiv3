import React from "react";

import styles from "@styles/contactView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";

const ContactView = () => {
  return (
    <CommonView thisView={viewMap.contactView} thisViewStyles={styles}>
      <h1>contact view</h1>
    </CommonView>
  );
};

export default ContactView;
