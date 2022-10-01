import React from "react";
import Image from "next/image";

import { ChevronUpIcon } from "@assets";
import { ViewContext } from "@pages/home";
import styles from "@styles/commonView.module.css";
import { viewMap } from "@utils";

const CommonView = ({ thisView, thisViewStyles, children }) => {
  return (
    <ViewContext.Consumer>
      {({ currentView, setCurrentView, lastOtherView }) => (
        <div
          className={`${thisViewStyles.view_container} ${
            styles.view_container
          } ${
            currentView === thisView || lastOtherView === thisView
              ? "visible_view"
              : "hidden_view"
          }`}
        >
          <div className={styles.icon_container}>
            <Image
              src={ChevronUpIcon}
              width={32}
              height={32}
              onClick={() => setCurrentView(viewMap.navView)}
            />
          </div>
          <div className={styles.children_container}>{children}</div>
        </div>
      )}
    </ViewContext.Consumer>
  );
};

export default CommonView;
