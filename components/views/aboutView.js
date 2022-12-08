import React from "react";
import Image from "next/image";

import {
  MeImg,
  DoubleDownGif,
  TennisImg,
  BeefNoodlesImg,
  PianoImg,
  FriendsImg,
} from "@assets";
import styles from "@styles/aboutView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";
import { Snippet } from "../aboutView/snippet";

const AboutView = () => {
  return (
    <CommonView thisView={viewMap.aboutView} thisViewStyles={styles}>
      <div className={styles.content_container}>
        <Snippet imgSide="right" imgSrc={MeImg} alt="me">
          <h2>Hello!</h2>
          <p>
            I&apos;m Chris Kei (pronounced the same as 🔑), a software engineer
            at DraftKings who just graduated from Northeastern University!
          </p>
          <div className={styles.gif_container}>
            <Image
              src={DoubleDownGif}
              width={50}
              height={50}
              alt="double down"
            />
          </div>
        </Snippet>
        <Snippet imgSide="left" imgSrc={TennisImg} alt="tennis">
          <p>Outside of work, I love spending my free time playing sports!</p>
          <p>
            Ever since my first year of college I&apos;ve been hooked on rock
            climbing, so now I climb at CRG Fenway after work twice a week.
          </p>
          <p>
            Over Covid, I replaced rock climbing with running. I just reached my
            season goal of 4 miles averaging under 8 minutes per mile!
          </p>
          <p>
            I also come from a big tennis family, so I&apos;m always down to
            play a set on the weekends. Hit me up if you&apos;ve got a racquet!
          </p>
        </Snippet>
        <Snippet imgSide="right" imgSrc={BeefNoodlesImg} alt="beef noodles">
          <p>Cooking is another big part of my life!</p>
          <p>
            I love cooking Asian styled dishes with my own twist on them. Some
            of my favorites to both cook and eat include steamed taro and pork
            with black bean sauce, stir fried rice cake, and braised beef noodle
            soup.
          </p>
          <p>
            One day, I&apos;d love to open a restaurant to have the chance to
            share both my culture and food with others!
          </p>
        </Snippet>
        <Snippet imgSide="left" imgSrc={PianoImg} alt="piano">
          <p>After a long day, I love winding down by playing my piano.</p>
          <p>
            Like many other Asian kids, I grew up learning classical piano. I
            played in some{" "}
            <a
              href="https://www.youtube.com/watch?v=ObsLF_vhz0A"
              target="_blank"
              rel="noreferrer"
              className={styles.link_container}
            >
              recitals
            </a>
            , did NYSSMA up to level 6, and even performed at my uncle&apos;s
            50th birthday!
          </p>
          <p>
            Nowadays, I love scrolling through Musescore and sightreading any
            piece of music I can get my hands on! Some songs that I play on
            repeat are <i>This Game</i> and <i>Merry-Go-Round of Life</i>.
          </p>
          <p>
            I&apos;ve also been trying to learn jazz and am planning on
            uploading videos to my TikTok account, so keep an eye out for those!
          </p>
        </Snippet>
        <Snippet imgSide="right" imgSrc={FriendsImg} alt="friends">
          <p>That&apos;s basically me in a nutshell!</p>
          <p>
            If you want to chat about climbing, cooking, pianoing, or anything
            else like what the best oatmeal toppings are, check out my last
            page!
          </p>
          <p>
            For everything work related and what I love about software
            engineering, head over to my next page!
          </p>
          <p>Thanks for visiting my website, hope we talk soon :)</p>
        </Snippet>
      </div>
    </CommonView>
  );
};

export default AboutView;
