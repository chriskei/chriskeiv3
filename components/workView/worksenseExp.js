import React from "react";
import Image from "next/image";

import {
  WorksenseHeroImg,
  WorksensePressImg,
  WorksenseContactImg,
} from "@assets";
import styles from "@styles/workView.module.css";

const WorksenseExp = () => {
  return (
    <>
      <div className={styles.exp_image}>
        <Image
          src={WorksenseHeroImg}
          width={450}
          height={400}
          alt="worksense"
        />
      </div>
      <p>
        Worksense was a to-be-created workplace bias analytics tool that I
        helped build a product website for.
      </p>
      <p>
        In my third year of school with one software engineering co-op in the
        bag, I felt a lot more confident in my web dev abilities so I decided to
        join Scout as a Developer! Scout is a super cool club that pairs up
        small teams of around three designers, three developers, and one project
        lead with the CEO of a start up to assist them in anything they need
        from product rebranding to website creation.
      </p>
      <p>
        The start up I got assigned to was Worksense which wanted to help
        managers see trends in their hiring, promotion, and layoff cycles. They
        were planning on building an analytics tool to collect useful metrics
        and use a dashboard to display data and provide further insights into
        harmful biases, such as if they were paying male workers higher salaries
        than female workers or hiring a large amount of workers from European
        backgrounds compared to those of African descent.
      </p>
      <p>
        To get started on this website, my (wonderful!) team first split up to
        let designers and devlopers do their own preparations. On the dev side,
        we decided on using Contentful as our CMS and set up a Gatsby site that
        was hosted on Netlify. We got everything in place like our API keys and
        removed unnecessary starter code such as anything related to blog posts,
        then we helped out a bit with low fidelity wireframes.
      </p>
      <p>
        A little over a month in, we started working on building the actual
        website by assigning each of the non-home pages to one designer and one
        developer. I took responsibility over the &quot;Request Demo&quot; page
        which consisted of a form to request a demo, an FAQ section, and another
        form for general inquiries.
      </p>
      <div className={styles.exp_image}>
        <Image
          src={WorksenseContactImg}
          width={450}
          height={275}
          alt="worksense contact"
        />
      </div>
      <p>
        Building these forms wasn&apos;t difficult. What was fun about them,
        though, was getting to integrate them with{" "}
        <a
          href="https://www.netlify.com/products/forms/"
          target="_blank"
          rel="noreferrer"
          className={styles.exp_link}
        >
          Netlify
        </a>
        ! Traditionally, lots of contact forms&apos; submit buttons just open up
        an email prompt in the user&apos;s build-in email app which is, in my
        experience, a terrible user experience. I was excited to find out that
        there is a better solution for this on Netlify that automatically
        collects responses and filters out spam messages for you.
      </p>
      <p>
        Another important part of the website that we had to figure out was how
        to position the transparent background waves shown in both of the above
        images. I still remember staying up late during Thanksgiving break
        figuring out how to center our wave assets so that they would scale with
        our viewports easily and also how to overlap our semi-transparent waves
        so that they would match the designs better. The solution we settled on
        for the latter problem involved absolute positioning lots of layers of
        images and was admittedly a little yucky, but it did end up making the
        waves look good!
      </p>
      <p>
        After that, everyone tackled the homepage together. The section I
        focused on was &quot;Worksense in the Press&quot; which featured an
        automatically rotating carousel of shoutouts from a few organizations.
      </p>
      <div className={styles.exp_image}>
        <Image
          src={WorksensePressImg}
          width={450}
          height={300}
          alt="worksense press"
        />
      </div>
      <p>
        For this carousel, I remember having trouble with timers causing a
        flicker of the content that just transitioned out. I also had to figure
        out how to create an early transition effect for when the user clicked
        one of the tabs below the content.
      </p>
      <p>
        After solving these issues and helping out with some other small details
        on the rest of the homepage, the website was done! All that was left was
        handing off the website to the Worksense team to manage.
      </p>
      <p>
        To prepare them, I made sure the website was being hosted on their own
        domain and that they had all of the necessary Netlify and Contentful
        credentials. I also wrote up the bulk of the documentation on how to
        locally clone the project, manage the repo, and add content through
        Contentful.
      </p>
      <p>
        Although the tool ended up being scrapped after we completed the website
        and the website isn&apos;t being hosted publicly anymore, it was a great
        idea to help educate others about biases that they may not have been
        conscious about!
      </p>
      <p>
        Github:{" "}
        <a
          href="https://github.com/chriskei/worksense-analytics"
          target="_blank"
          rel="noreferrer"
          className={styles.exp_link}
        >
          link
        </a>{" "}
        | Website:{" "}
        <a
          href="https://web.archive.org/web/20220125020151/https://worksenseanalytics.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.exp_link}
        >
          link
        </a>
      </p>
    </>
  );
};

export { WorksenseExp };
