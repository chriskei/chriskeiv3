import React, { useState } from "react";
import { AboutView, ContactView, NavView, WorkView } from "@views";

import styles from "@styles/home.module.css";
import { viewMap } from "@utils";
import { AttributionView } from "../components/views";

const Home = () => {
  const [currentView, setCurrentView] = useState(viewMap.navView);
  const [lastOtherView, setLastOtherView] = useState(viewMap.aboutView);

  return (
    <div
      className={`${styles.root_container} ${
        currentView === viewMap.attributionView
          ? styles.show_attribution_view
          : currentView === viewMap.navView
          ? styles.show_nav_view
          : styles.show_other_view
      }`}
    >
      <AttributionView setCurrentView={setCurrentView} />
      <NavView
        currentView={currentView}
        setCurrentView={setCurrentView}
        setLastOtherView={setLastOtherView}
      />
      <AboutView
        currentView={currentView}
        setCurrentView={setCurrentView}
        lastOtherView={lastOtherView}
      />
      <WorkView
        currentView={currentView}
        setCurrentView={setCurrentView}
        lastOtherView={lastOtherView}
      />
      <ContactView
        currentView={currentView}
        setCurrentView={setCurrentView}
        lastOtherView={lastOtherView}
      />
    </div>
  );
};

export default Home;
