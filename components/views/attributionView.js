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
        <li>https://font.gooova.com/fonts/14316/cocomat-pro-font.html</li>
        <li>
          https://www.awwwards.com/inspiration/cursor-interaction-playing-with-words
        </li>
        <li>https://css-tricks.com/practical-css-scroll-snapping/</li>
        <li>https://github.com/nanxiaobei/react-spring-dnd</li>
      </ul>
    </CommonView>
  );
};

export default AttributionView;
