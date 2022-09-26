import React from "react";
import Image from "next/image";

import { AstronautGif, TelescopeGif, AirplaneGif, InfoIcon } from "@assets";
import styles from "@styles/navView.module.css";
import { viewMap } from "@utils";

const NavView = ({ currentView, setCurrentView, setLastOtherView }) => {
  return (
    <div
      className={`${styles.view_container} ${
        currentView === viewMap.navView ? "visible_view" : "hidden_view"
      }`}
    >
      <div className={styles.name_container}>
        <h1 className="dune_font">Christopher Kei</h1>
        <Image
          src={InfoIcon}
          width={32}
          height={32}
          onClick={() => setCurrentView(viewMap.attributionView)}
          className={styles.icon_container}
        />
      </div>
      <div className={styles.icons_container}>
        <div
          onClick={() => {
            setCurrentView(viewMap.aboutView);
            setLastOtherView(viewMap.aboutView);
          }}
          className={styles.icon_container}
        >
          <Image src={AstronautGif} width={300} height={300} />
        </div>
        <div
          onClick={() => {
            setCurrentView(viewMap.workView);
            setLastOtherView(viewMap.workView);
          }}
          className={styles.icon_container}
        >
          <Image src={TelescopeGif} width={300} height={300} />
        </div>
        <div
          onClick={() => {
            setCurrentView(viewMap.contactView);
            setLastOtherView(viewMap.contactView);
          }}
          className={styles.icon_container}
        >
          <Image src={AirplaneGif} width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default NavView;
