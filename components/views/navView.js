import React from "react";
import Image from "next/image";

import { AstronautGif, TelescopeGif, AirplaneGif } from "@assets";
import styles from "@styles/navView.module.css";
import { viewMap } from "@utils";

const NavView = ({ currentView, setCurrentView, setLastOtherView }) => {
  return (
    <div
      className={`${styles.view_container} ${
        currentView === viewMap.navView ? "visible_view" : "hidden_view"
      }`}
    >
      <div
        onClick={() => {
          setCurrentView(viewMap.aboutView);
          setLastOtherView(viewMap.aboutView);
        }}
        className={styles.gif_container}
      >
        <Image src={AstronautGif} width={300} height={300} />
      </div>
      <div
        onClick={() => {
          setCurrentView(viewMap.workView);
          setLastOtherView(viewMap.workView);
        }}
        className={styles.gif_container}
      >
        <Image src={TelescopeGif} width={300} height={300} />
      </div>
      <div
        onClick={() => {
          setCurrentView(viewMap.contactView);
          setLastOtherView(viewMap.contactView);
        }}
        className={styles.gif_container}
      >
        <Image src={AirplaneGif} width={300} height={300} />
      </div>
    </div>
  );
};

export default NavView;
