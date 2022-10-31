import React from "react";
import Image from "next/image";

import {
  MeJpg,
  DoubleDownGif,
  RockClimbingJpg,
  BeefNoodleJpg,
  PianoJpg,
  FriendsJpg,
} from "@assets";
import styles from "@styles/aboutView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";
import { Snippet } from "../aboutView/snippet";

const AboutView = () => {
  return (
    <CommonView thisView={viewMap.aboutView} thisViewStyles={styles}>
      <div className={styles.content_container}>
        <Snippet imgSide="right" imgSrc={MeJpg}>
          <h2>Hello!</h2>
          <p>
            I'm Chris, a software engineer at DraftKings who just graduated from
            Northeastern University!
          </p>
          <div className={styles.gif_container}>
            <Image src={DoubleDownGif} width={50} height={50} />
          </div>
        </Snippet>
        <Snippet imgSide="left" imgSrc={RockClimbingJpg}>
          <p>Outside of work, I love spending my free time playing sports!</p>
          <p>
            Ever since my first year of college I've been hooked on rock
            climbing, so now I climb at CRG Fenway after work twice a week.
          </p>
          <p>
            Over Covid, I replaced rock climbing with running. I just reached my
            season goal of 4 miles averaging under 8 minutes per mile!
          </p>
          <p>
            I also come from a big tennis family, so I'm always down to play a
            set on the weekends. Hit me up if you've got a racquet!
          </p>
        </Snippet>
        <Snippet imgSide="right" imgSrc={BeefNoodleJpg}>
          <p>Cooking is another big part of my life!</p>
          <p>
            I love cooking Asian styled dishes with my own twist on them. Some
            of my favorites to both cook and eat include steamed taro and pork
            with black bean sauce, stir fried rice cake, and braised beef noodle
            soup.
          </p>
          <p>
            One day, I'd love to open a restaurant to have the chance to share
            both my culture and food with others!
          </p>
        </Snippet>
        <Snippet imgSide="left" imgSrc={PianoJpg}>
          <p>After a long day, I love winding down by playing my piano.</p>
          <p>
            Like many other Asian kids, I grew up learning classical piano.
            After quitting in high school, one day I felt like trying it out
            again and realized that it was the lessons that I hated, not the
            piano.
          </p>
          <p>
            Nowadays, I love scrolling through Musescore and sightreading any
            piece of music I can get my hands on! Some songs that I play on
            repeat are <i>This Game</i> and <i>Merry-Go-Round of Life</i>.
          </p>
          <p>
            I've also been trying to learn jazz and am planning on uploading
            videos to my TikTok account, so keep an eye out for those!
          </p>
        </Snippet>
        <Snippet imgSide="right" imgSrc={FriendsJpg}>
          <p>That's basically me in a nutshell!</p>
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
