import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlueprintGif, ChevronUpIcon } from "@assets";
import styles from "@styles/404.module.css";

const FourOhFour = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.content_container}>
        <Image
          src={BlueprintGif}
          width={300}
          height={300}
          priority={true}
          alt="blueprint"
        />
        <div className={styles.text_container}>
          <h2 className={styles.text_headline}>Whoops!</h2>
          <p>You found a page off of the blueprint.</p>
          <Link href="/home">
            <div className={styles.button_container}>
              <p className={styles.text_main}>Home base</p>
              <Image
                src={ChevronUpIcon}
                width={32}
                height={32}
                alt="chevron up"
                className={styles.icon_container}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
