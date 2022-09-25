import React from "react";
import Image from "next/image";

import { ChevronsUp } from "@assets";
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
      <Image
        src={ChevronsUp}
        width={50}
        height={50}
        onClick={() => setCurrentView(viewMap.navView)}
      />
      {children}
    </div>
  );
};

export default CommonView;
