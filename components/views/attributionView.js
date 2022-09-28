import React from "react";

import styles from "@styles/attributionView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";

const AttributionView = () => {
  return (
    <CommonView thisView={viewMap.attributionView} thisViewStyles={styles}>
      <h1>attribution view</h1>
      <ul>
        <li>https://feathericons.com/</li>
        <li>https://icons8.com/illustrations/illustration/flame-training</li>
        <li>https://coolors.co/00abda</li>
        <li>https://fontswan.com/dune-font/</li>
        <li>
          https://www.awwwards.com/inspiration/cursor-interaction-playing-with-words
        </li>
      </ul>
    </CommonView>
  );
};

export default AttributionView;
