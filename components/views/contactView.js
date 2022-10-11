import React, { useState, useMemo } from "react";

import styles from "@styles/contactView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";
import { ContactLink } from "../contactView/contactLink";
import { contactStates } from "../contactView/contactStates";
import { dotPositions } from "../contactView/dotPositions";

const ContactView = () => {
  const [hovering, setHovering] = useState(contactStates.contact);
  const Dots = useMemo(() => {
    let divArr = [];
    for (let i = 0; i < 2; i++) {
      divArr.push(
        <div
          className={styles.dot}
          style={{
            left: dotPositions[hovering][i].left,
            top: dotPositions[hovering][i].top,
          }}
          key={i}
        />
      );
    }
    return <div className={styles.pre_row_container}>{divArr}</div>;
  }, [hovering]);

  return (
    <CommonView thisView={viewMap.contactView} thisViewStyles={styles}>
      {Dots}
      <div className={styles.row_container}>
        <ContactLink
          href="https://github.com/chriskei"
          contactState="github"
          setHovering={setHovering}
        />
        <ContactLink
          href="https://www.linkedin.com/in/chris-kei"
          contactState="linkedin"
          setHovering={setHovering}
        />
        <ContactLink
          href="https://mail.google.com/mail/u/0/?fs=1&to=christopherbkei@gmail.com&su=Let's%20connect!&tf=cm"
          contactState="email"
          setHovering={setHovering}
        />
      </div>
      <div className={styles.row_container}>
        <ContactLink
          href="https://www.instagram.com/kei_chris/"
          contactState="instagram"
          setHovering={setHovering}
        />
        <ContactLink
          href="https://www.tiktok.com/@kei_chris"
          contactState="tiktok"
          setHovering={setHovering}
        />
        <ContactLink
          href="https://www.buymeacoffee.com/chriskei"
          contactState="coffee"
          setHovering={setHovering}
        />
      </div>
    </CommonView>
  );
};

export default ContactView;
