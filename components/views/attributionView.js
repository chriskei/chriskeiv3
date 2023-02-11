import React from "react";

import { ViewContext } from "@pages/home";
import styles from "@styles/attributionView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";

const AttributionView = () => {
  return (
    <ViewContext.Consumer>
      {({ currentView }) => (
        <CommonView thisView={viewMap.attributionView} thisViewStyles={styles}>
          <h2 className={styles.text_header}>Thank you :)</h2>
          <p>
            My website could not have been made possible without the help of
            these wonderful free resources!
          </p>
          <ul>
            <li
              className={`${styles.list_item} ${
                currentView === "attribution" ? styles.fade_in : ""
              }`}
            >
              <a
                href="https://www.awwwards.com/inspiration/cursor-interaction-playing-with-words"
                target="_blank"
                rel="noreferrer"
                className={styles.link_container}
              >
                Awwwards
              </a>{" "}
              for tons of inspiration in figuring out the theme of my website
            </li>
            <li
              className={`${styles.list_item} ${
                currentView === "attribution" ? styles.fade_in : ""
              }`}
            >
              <a
                href="https://icons8.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link_container}
              >
                Icons8
              </a>{" "}
              for the fun futuristic GIFs on the homepage
            </li>
            <li
              className={`${styles.list_item} ${
                currentView === "attribution" ? styles.fade_in : ""
              }`}
            >
              <a
                href="https://feathericons.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link_container}
              >
                Feather
              </a>{" "}
              for their clean chevron and info icons
            </li>
            <li
              className={`${styles.list_item} ${
                currentView === "attribution" ? styles.fade_in : ""
              }`}
            >
              <a
                href="https://coolors.co"
                target="_blank"
                rel="noreferrer"
                className={styles.link_container}
              >
                Coolors
              </a>{" "}
              for lots of help with converting colors to different formats and
              finding complementary shades
            </li>
            <li
              className={`${styles.list_item} ${
                currentView === "attribution" ? styles.fade_in : ""
              }`}
            >
              <a
                href="https://fontswan.com/dune-font"
                target="_blank"
                rel="noreferrer"
                className={styles.link_container}
              >
                FontSwan
              </a>{" "}
              for an awesome mock Dune movie font
            </li>
            <li
              className={`${styles.list_item} ${
                currentView === "attribution" ? styles.fade_in : ""
              }`}
            >
              <a
                href="https://font.gooova.com/fonts/14316/cocomat-pro-font.html"
                target="_blank"
                rel="noreferrer"
                className={styles.link_container}
              >
                Gooova Fonts
              </a>{" "}
              for a solid paragraph font
            </li>
            <li
              className={`${styles.list_item} ${
                currentView === "attribution" ? styles.fade_in : ""
              }`}
            >
              <a
                href="https://css-tricks.com/practical-css-scroll-snapping"
                target="_blank"
                rel="noreferrer"
                className={styles.link_container}
              >
                CSS Tricks
              </a>{" "}
              for lots of great articles over the years, but specifically this
              one on scroll snapping
            </li>
            <li
              className={`${styles.list_item} ${
                currentView === "attribution" ? styles.fade_in : ""
              }`}
            >
              <a
                href="https://github.com/nanxiaobei/react-spring-dnd"
                target="_blank"
                rel="noreferrer"
                className={styles.link_container}
              >
                Nan Xiao Bei
              </a>{" "}
              for their fluid drag module which made my work page so much
              simpler
            </li>
            <li
              className={`${styles.list_item} ${
                currentView === "attribution" ? styles.fade_in : ""
              }`}
            >
              <a
                href="https://www.youtube.com/watch?v=T33NN_pPeNI"
                target="_blank"
                rel="noreferrer"
                className={styles.link_container}
              >
                Fireship
              </a>{" "}
              for amazing videos all-around, especially this one on scroll
              animations
            </li>
          </ul>
        </CommonView>
      )}
    </ViewContext.Consumer>
  );
};

export default AttributionView;
