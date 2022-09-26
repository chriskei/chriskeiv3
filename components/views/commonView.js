import React from "react";
import Image from "next/image";

import { ChevronUpIcon } from "@assets";
import commonViewStyles from "@styles/commonView.module.css";
import { viewMap } from "@utils";

const CommonView = ({
  thisView,
  currentView,
  setCurrentView,
  lastOtherView,
  styles,
  children,
}) => {
  return (
    <div
      className={`${styles.view_container} ${
        currentView === thisView || lastOtherView === thisView
          ? "visible_view"
          : "hidden_view"
      }`}
    >
      <div className={commonViewStyles.icon_container}>
        <Image
          src={ChevronUpIcon}
          width={32}
          height={32}
          onClick={() => setCurrentView(viewMap.navView)}
        />
      </div>
      {children}
    </div>
  );
};

export default CommonView;
