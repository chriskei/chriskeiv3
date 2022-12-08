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
import { PongExp } from "../workView/pongExp";

const expListItems = [
  "7pm",
  "Pong Pong Wu",
  "Worksense Analytics",
  "Loop Chocolate",
  "Solaria Labs",
  "INTEGRITY Security Services",
  "DraftKings",
];

const expDetails = [
  <SevenExp key="seven" />,
  <PongExp key="pong" />,
  <WorksenseExp key="worksense" />,
  <LoopExp key="loop" />,
  <SolariaExp key="solaria" />,
  <IntegrityExp key="integrity" />,
  <DraftkingsExp key="draftkings" />,
];

const WorkView = () => {
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

export default WorkView;
