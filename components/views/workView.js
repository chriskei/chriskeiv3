import React from "react";

import styles from "@styles/workView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";

const workView = ({ currentView, setCurrentView, lastOtherView }) => {
  return (
    <CommonView
      thisView={viewMap.workView}
      currentView={currentView}
      setCurrentView={setCurrentView}
      lastOtherView={lastOtherView}
      thisViewStyles={styles}
    >
      <h1>work view</h1>
    </CommonView>
  );
};

export default workView;
