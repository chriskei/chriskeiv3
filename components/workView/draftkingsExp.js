import React from "react";
import Image from "next/image";

import { DraftkingsDfsPng } from "@assets";
import styles from "@styles/workView.module.css";

const DraftkingsExp = () => {
  return (
    <>
      <div className={styles.exp_image}>
        <Image src={DraftkingsDfsPng} width={550} height={300} />
      </div>
      <p>
        I'm currently a software engineer at DraftKings! In June 2022, I joined
        the Creative team and began managing and enhancing the system that
        stakeholders use to create landing pages. Out of my small team of four
        engineers, I'd say my niche lies in improving inefficiencies in our data
        layer and optimzing our build process.
      </p>
      <p>
        It's too early to go through a breakdown of my entire DraftKings story,
        but here are some highlights of my six months so far:
      </p>
      <ul>
        <li>
          Created a table component that can read data from a CSV/XLSX file for
          a streamlined table creation process
        </li>
        <li>
          Oversaw the{" "}
          <a
            href="https://www.draftkings.com/reignmakers-football"
            target="_blank"
            className={styles.exp_link}
          >
            Reignmakers Football
          </a>{" "}
          page launch from the engineering side which included the addition of
          article-referencing modals
        </li>
        <li>
          Built a geolocation wrapper to display wrapped components for users in
          specified countries only
        </li>
        <li>
          Enacted page previews on our test environment to allow stakeholders to
          forego 15 minute delays and instead see their page changes instantly
        </li>
        <li>
          Added an option for modals to be uncrawlable per the SEO team's
          request
        </li>
        <li>
          Implemented incremental builds to cut average S3 publishing times from
          ten minutes to under one minute
        </li>
        <li>
          Set up automatic build retrying and better build failure Slack
          notifications
        </li>
        <li>
          Produced a sharable link component that integrated with the mobile Web
          Share API
        </li>
        <li>
          Designed a way for stakeholders to self-service custom fonts and style
          an entire page's typography consistently
        </li>
        <li>
          And finally, at this moment I am leading efforts to establish a robust
          GraphQL layer!
        </li>
      </ul>
      <p>
        Website:{" "}
        <a
          href="https://www.draftkings.com/"
          target="_blank"
          className={styles.exp_link}
        >
          link
        </a>
      </p>
    </>
  );
};

export { DraftkingsExp };
