import React from "react";

import styles from "@styles/contactView.module.css";
import { contactStates } from "./contactStates";

const ContactLink = ({ href, contactState, setHovering }) => {
  return (
    <a
      href={href}
      target="_blank"
      onMouseEnter={() => setHovering(contactStates[contactState])}
      onMouseLeave={() => setHovering(contactStates.contact)}
    >
      <div className={styles.contact_item_container} />
    </a>
  );
};

export { ContactLink };
