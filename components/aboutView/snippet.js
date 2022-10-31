import React, { useMemo } from "react";
import Image from "next/image";

import styles from "@styles/aboutView.module.css";

const Snippet = ({ imgSide, imgSrc, children }) => {
  const imageContainer = useMemo(
    () => (
      <div className={styles.image_container}>
        <Image
          src={imgSrc}
          width={400}
          height={400}
          className={styles.circular_image}
        />
      </div>
    ),
    [imgSrc, styles]
  );

  return (
    <div className={styles.scroll_container}>
      {imgSide === "left" && imageContainer}
      <div className={styles.text_container}>{children}</div>
      {imgSide === "right" && imageContainer}
    </div>
  );
};

export { Snippet };
