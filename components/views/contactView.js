import React from "react";

import styles from "@styles/contactView.module.css";
import { viewMap } from "@utils";
import CommonView from "./_commonView";

const ContactView = ({ currentView, setCurrentView, lastOtherView }) => {
  return (
    <CommonView
      thisView={viewMap.contactView}
      currentView={currentView}
      setCurrentView={setCurrentView}
      lastOtherView={lastOtherView}
      styles={styles}
    >
      <h1>contact view</h1>
    </CommonView>
  );
};

export default ContactView;
