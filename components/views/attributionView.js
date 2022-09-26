import React from "react";
import Image from "next/image";

import { ChevronDownIcon } from "@assets";
import styles from "@styles/attributionView.module.css";
import { viewMap } from "../../utils/views";

const AttributionView = ({ setCurrentView }) => {
  return (
    <div className={styles.view_container}>
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
      <div className={styles.icon_container}>
        <Image
          src={ChevronDownIcon}
          width={32}
          height={32}
          onClick={() => setCurrentView(viewMap.navView)}
        />
      </div>
    </div>
  );
};

export default AttributionView;
