import React, { useState, useMemo } from "react";

import styles from "@styles/contactView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";
import { ContactLink } from "../contactView/contactLink";
import { contactStates } from "../contactView/contactStates";
import { contactLinks } from "../contactView/contactLinks";
import { dotPositions } from "../contactView/dotPositions";

const ContactView = () => {
  const [hovering, setHovering] = useState(contactStates.contact);
  const Dots = useMemo(() => {
    let divArr = [];
    for (let i = 0; i < dotPositions[hovering].length; i++) {
      divArr.push(
        <div
          className={styles.dot}
          style={{
            left: dotPositions[hovering][i].left,
            top: dotPositions[hovering][i].top,
          }}
          key={i}
          onMouseEnter={() => setHovering(hovering)}
          onMouseLeave={() => setHovering(hovering)}
        />
      );
    }
    return (
      <div
        className={`${styles.pre_row_container} ${
          contactLinks[hovering] && styles.pointer
        }`}
        onClick={() =>
          contactLinks[hovering] && window.open(contactLinks[hovering])
        }
      >
        {divArr}
      </div>
    );
  }, [hovering]);

  return (
    <CommonView thisView={viewMap.contactView} thisViewStyles={styles}>
      {Dots}
      <div className={`${styles.row_container} ${styles.first_row_container}`}>
        <ContactLink contactState="github" setHovering={setHovering} />
        <ContactLink contactState="linkedin" setHovering={setHovering} />
        <ContactLink contactState="email" setHovering={setHovering} />
      </div>
      <div className={styles.row_container}>
        <ContactLink contactState="instagram" setHovering={setHovering} />
        <ContactLink contactState="tiktok" setHovering={setHovering} />
        <ContactLink contactState="resume" setHovering={setHovering} />
      </div>
    </CommonView>
  );
};

export default ContactView;
