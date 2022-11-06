import React, { useState } from "react";
import SpringList from "react-spring-dnd";

import styles from "@styles/workView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";
import {
  DraftkingsExp,
  IntegrityExp,
  SevenExp,
  LoopExp,
  SolariaExp,
  WorksenseExp,
} from "../workView";
import { MahjongExp } from "../workView/mahjongExp";

const expListItems = [
  "DraftKings",
  "INTEGRITY Security Services",
  "Solaria Labs",
  "Loop Chocolate",
  "Worksense Analytics",
  "Mahjong Dashboard",
  "7pm",
];

const expDetails = [
  <DraftkingsExp />,
  <IntegrityExp />,
  <SolariaExp />,
  <LoopExp />,
  <WorksenseExp />,
  <MahjongExp />,
  <SevenExp />,
];

const workView = () => {
  const [expIdx, setExpIdx] = useState(0);

  return (
    <CommonView thisView={viewMap.workView} thisViewStyles={styles}>
      <div className={styles.content_container}>
        <SpringList onDragEnd={(order) => setExpIdx(order[0])}>
          {expListItems.map((item, index) => (
            <div key={index} className={styles.exp_list_item_container}>
              <p
                className={`${styles.exp_list_item} ${
                  expIdx === index && styles.selected_exp_list_item
                }`}
              >
                {item}
              </p>
            </div>
          ))}
        </SpringList>
        <div className={styles.exp_container}>{expDetails[expIdx]}</div>
      </div>
    </CommonView>
  );
};

export default workView;
