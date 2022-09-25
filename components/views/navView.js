import React from "react";

import styles from "@styles/navView.module.css";
import { viewMap } from "@utils";

const NavView = ({ currentView, setCurrentView, setLastOtherView }) => {
  return (
    <div
      className={`${styles.view_container} ${
        currentView === viewMap.navView ? "visible_view" : "hidden_view"
      }`}
    >
      <h1
        onClick={() => {
          setCurrentView(viewMap.aboutView);
          setLastOtherView(viewMap.aboutView);
        }}
      >
        about
      </h1>
      <h1
        onClick={() => {
          setCurrentView(viewMap.workView);
          setLastOtherView(viewMap.workView);
        }}
      >
        work
      </h1>
      <h1
        onClick={() => {
          setCurrentView(viewMap.contactView);
          setLastOtherView(viewMap.contactView);
        }}
      >
        contact
      </h1>
    </div>
  );
};

export default NavView;
