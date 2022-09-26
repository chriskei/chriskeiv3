import React from "react";

import styles from "@styles/aboutView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";

const AboutView = ({ currentView, setCurrentView, lastOtherView }) => {
  return (
    <CommonView
      thisView={viewMap.aboutView}
      currentView={currentView}
      setCurrentView={setCurrentView}
      lastOtherView={lastOtherView}
      styles={styles}
    >
      <h1>about view</h1>
    </CommonView>
  );
};

export default AboutView;
