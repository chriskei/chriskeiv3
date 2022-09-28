import React from "react";

import styles from "@styles/aboutView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";

const AboutView = () => {
  return (
    <CommonView thisView={viewMap.aboutView} thisViewStyles={styles}>
      <h1>about view</h1>
    </CommonView>
  );
};

export default AboutView;
