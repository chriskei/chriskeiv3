import React, { useState, createContext } from "react";

import styles from "@styles/home.module.css";
import { viewMap } from "@utils";
import {
  AboutView,
  AttributionView,
  ContactView,
  NavView,
  WorkView,
} from "@views";

export const ViewContext = createContext();

// TODO:
// 1. fix 100% sizing
// 2. fix errors on build
// 3. make mobile friendly

const Home = () => {
  const [currentView, setCurrentView] = useState(viewMap.navView);
  const [lastOtherView, setLastOtherView] = useState(viewMap.aboutView);

  return (
    <ViewContext.Provider
      value={{ currentView, setCurrentView, lastOtherView, setLastOtherView }}
    >
      <div
        className={`${styles.root_container} ${
          currentView === viewMap.navView
            ? styles.show_nav_view
            : styles.show_other_view
        }`}
      >
        <NavView />
        <AboutView />
        <WorkView />
        <ContactView />
        <AttributionView />
      </div>
    </ViewContext.Provider>
  );
};

export default Home;
