import React from "react";

import { AstronautGif, TelescopeGif, AirplaneGif, InfoPng } from "@assets";
import { ViewContext } from "@pages/home";
import styles from "@styles/navView.module.css";
import { viewMap } from "@utils";
import { ViewImage } from "../navView/viewImage";

const NavView = () => {
  return (
    <ViewContext.Consumer>
      {({ currentView }) => (
        <div
          className={`${styles.view_container} ${
            currentView === viewMap.navView ? "visible_view" : "hidden_view"
          }`}
        >
          <div className={styles.name_container}>
            <h1 className="dune_font">Christopher Kei</h1>
            <ViewImage
              thisView={viewMap.attributionView}
              imgSrc={InfoPng}
              imgSize={44}
              className={styles.icon_container}
            />
          </div>
          <div className={styles.icons_container}>
            <ViewImage
              thisView={viewMap.aboutView}
              imgSrc={AstronautGif}
              imgSize={300}
              className={styles.icon_container}
            />
            <ViewImage
              thisView={viewMap.workView}
              imgSrc={TelescopeGif}
              imgSize={300}
              className={styles.icon_container}
            />
            <ViewImage
              thisView={viewMap.contactView}
              imgSrc={AirplaneGif}
              imgSize={300}
              className={`${styles.icon_container} ${styles.fade_sides}`}
            />
          </div>
        </div>
      )}
    </ViewContext.Consumer>
  );
};

export default NavView;
