import React from "react";
import Image from "next/image";

import { LoopHeroPng } from "@assets";
import styles from "@styles/workView.module.css";

const LoopExp = () => {
  return (
    <>
      <div className={styles.exp_image}>
        <Image src={LoopHeroPng} width={450} height={400} />
      </div>
      <p>
        Loop was an e-commerce website that my Scout team built for a healthy
        chocolate company! But to be honest, completing this website was a
        nightmare.
      </p>
      <p>
        But first, a little relevant background. At the end of my third year at
        Northeastern, I was tired.
      </p>
      <p>
        In the fall semester, I took graduate level Machine Learning and Pattern
        Recognition. I knew the class would be challenging, but didn't know it
        would be the most challenging course of my college career.
      </p>
      <p>
        I also wanted to get more involved in clubs that year to meet new
        people, so I became the Corporate Relations Chair for the Society of
        Asian Scientists and Engineers (SASE) and a Developer in Scout, as you
        might've seen in the Worksense blurb!
      </p>
      <p>
        Tack on the search for a second co-op and difficulties seeing friends
        due to the pandemic, and I had one jam-packed semester.
      </p>
      <p>
        Thankfully, my spring semester was a lot less intense since I only had
        to work a 9-5 and do SASE work. However, looking forward to my fourth
        year, I was thinking of taking it easy and not doing any
        extracurriculars. That is, until I started feeling the FOMO. After a
        full, happy year of making lots of new friends, I thought my fall
        semester would be "lame" if I didn't interact with the community in some
        way, especially since I was moving off campus.
      </p>
      <p>
        So that summer, I caved in and applied to Scout as a Developer again.
        Later in the summer, Maggie, one of my dev teammates on Worksense who
        had become the new Tech Director for Scout, reached out and asked if I
        wanted to be a Tech Lead! Thinking it would be a great opportunity to
        meet new people and gain technical management skills, I accepted.
      </p>
      <p>
        Two months later, I was dying from schoolwork alone. I had an extremely
        technical course load, each with their own problems: my Database Design
        professor was a dull lecturer, Software Engineering was being run
        terribly, Computer Graphics lectures were every monday from 6-9pm, and
        Group Theory was going completely over my head. I was also on the hunt
        for a full time job since the beginning of September which meant a ton
        of interviews and emails that had to be squeezed into my schedule.
      </p>
      <p>
        I know this was a lot of info about everything not related to Loop, but
        because of all of this work that I had to do, I really couldn't focus on
        Scout. In October, when Scout had their annual retreat, I really wanted
        to go since we weren't able to have an in-person retreat the previous
        year, but after my Group Theory midterm got pushed back a week, I knew
        it wouldn't be the responsible thing to do.
      </p>
      <p>
        As for the actual website itself, that was also a blur. When we first
        heard that our client wanted us to build him a Shopify site, my whole
        world was shaken up even more. For the rest of the project, we were
        constantly reading Shopify docs since none of us devs had any experience
        with it. We were thinking of using the{" "}
        <a
          href="https://shopify.dev/custom-storefronts/tools/js-buy"
          target="_blank"
          className={styles.exp_link}
        >
          Buy SDK
        </a>{" "}
        since we were all proficient in React and JavaScript, but decided
        against it because we were afraid our client wouldn't know how to
        maintain the website and it looked like there were way too many Shopify
        functionalities we would need to build support for.
      </p>
      <p>
        When we began working on the website with Liquid and the{" "}
        <a
          href="https://github.com/Shopify/dawn"
          target="_blank"
          className={styles.exp_link}
        >
          Dawn
        </a>{" "}
        starter theme though, we were pleasantly surprised. Liquid wasn't too
        difficult to work with, it was really just enhanced HTML and reminded me
        of Moustache templates.
      </p>
      <p>
        What was a huge pain, though, was the massive pile of starter code and
        completely foreign directory sturcture. Shopify, we quickly learned, was
        extremely stubborn. Every file had to be placed exactly where Shopify
        expected it to be. And without much guidance on what the difference
        between /layout, /sections, /templates, and all of the other
        subdirectories were, parsing through and figuring out what we needed to
        scrap and keep was difficult, to say the least.
      </p>
      <p>
        As we slowly worked our way through the about page and nav bar to become
        more familiar with Liquid, one thing we did a really good job of was
        writing documentation. On our repo (which is unfortunately private), our
        README outlines the entire development workflow for how to add a new
        page to the website, utilize the global config, add in image assets, and
        set up new purchasable products on Shopify.
      </p>
      <p>
        For the new couple of weeks though, development was essentially at a
        stand still. On the devs' side, all three of us were getting slammed
        with neverending waves of assignments and midterms. Thankfully, both our
        project lead and client were very understanding, and I promised that we
        would finish the website by the handoff date.
      </p>
      <p>
        During this intersession, we also lost contact with one of our devs. At
        some point, he just stopped showing up to meetings, didn't respond to
        our Slack messages, and wasn't doing any work. I worked with Maggie to
        try texting him and asking his close friends if they could contact him
        for us, but he never came back. To be honest though, I wasn't too angry.
        I knew there wasn't anything we could do- if he decided he didn't want
        to be on the team anymore then that was that. All I knew was I had
        promised our client a working website, and as Tech Lead, I was going to
        deliver on that no matter what.
      </p>
      <p>
        I really wish I could add more technical details here, but to be honest,
        even after rereading the documentation we wrote and looking at the
        website, nothing stands out to me. I vaguely remember making the
        background colors look good, setting up the high quality waves on the
        masthead, and working on the shop page buttons and dropdowns. In the end
        though, all I really remember is finishing up my finals and then
        grinding on the website for another three days.
      </p>
      <p>
        I still love Scout and am overall happy with how the website turned out,
        but I sure was glad when this project and semester were completely done.
        In the future though, I would love to work on a personal project where I
        have the time to more properly build a Shopify website, organize files
        neatly, and use Liquid to its fullest.
      </p>
      <p>
        Website:{" "}
        <a
          href="https://loopchocolate.com/"
          target="_blank"
          className={styles.exp_link}
        >
          link
        </a>
      </p>
    </>
  );
};

export { LoopExp };
