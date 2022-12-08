import React from "react";

import { AstronautGif, WebsiteGif, AirplaneGif, InfoIcon } from "@assets";
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
              imgSrc={InfoIcon}
              imgSize={44}
              className={styles.icon_container}
              alt="info"
            />
          </div>
          <div className={styles.icons_container}>
            <ViewImage
              thisView={viewMap.aboutView}
              imgSrc={AstronautGif}
              imgSize={300}
              className={styles.icon_container}
              alt="astronaut"
            />
            <ViewImage
              thisView={viewMap.workView}
              imgSrc={WebsiteGif}
              imgSize={300}
              className={styles.icon_container}
              alt="website"
            />
            <ViewImage
              thisView={viewMap.contactView}
              imgSrc={AirplaneGif}
              imgSize={300}
              className={`${styles.icon_container} ${styles.fade_sides}`}
              alt="airplane"
            />
          </div>
        </div>
      )}
    </ViewContext.Consumer>
  );
};

export default NavView;
