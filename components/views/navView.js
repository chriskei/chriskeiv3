import React from "react";

import { AstronautGif, TelescopeGif, AirplaneGif, InfoIcon } from "@assets";
import styles from "@styles/navView.module.css";
import { viewMap } from "@utils";
import { ViewImage } from "../navView/viewImage";

const NavView = ({ currentView, setCurrentView, setLastOtherView }) => {
  return (
    <div
      className={`${styles.view_container} ${
        currentView === viewMap.navView ? "visible_view" : "hidden_view"
      }`}
    >
      <div className={styles.name_container}>
        <h1 className="dune_font">Christopher Kei</h1>
        <ViewImage
          viewMapKey="attributionView"
          imgSrc={InfoIcon}
          imgSize={32}
          setCurrentView={setCurrentView}
          setLastOtherView={setLastOtherView}
          className={styles.icon_container}
        />
      </div>
      <div className={styles.icons_container}>
        <ViewImage
          viewMapKey="aboutView"
          imgSrc={AstronautGif}
          imgSize={300}
          setCurrentView={setCurrentView}
          setLastOtherView={setLastOtherView}
          className={styles.icon_container}
        />
        <ViewImage
          viewMapKey="workView"
          imgSrc={TelescopeGif}
          imgSize={300}
          setCurrentView={setCurrentView}
          setLastOtherView={setLastOtherView}
          className={styles.icon_container}
        />
        <ViewImage
          viewMapKey="contactView"
          imgSrc={AirplaneGif}
          imgSize={300}
          setCurrentView={setCurrentView}
          setLastOtherView={setLastOtherView}
          className={`${styles.icon_container} ${styles.fade_sides}`}
        />
      </div>
    </div>
  );
};

export default NavView;
