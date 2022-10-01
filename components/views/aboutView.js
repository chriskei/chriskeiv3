import React from "react";
import Image from "next/image";

import { MeJpg, DoubleDownGif, RockClimbingJpg } from "@assets";
import styles from "@styles/aboutView.module.css";
import { viewMap } from "@utils";
import CommonView from "./commonView";

const AboutView = () => {
  return (
    <CommonView thisView={viewMap.aboutView} thisViewStyles={styles}>
      <div className={styles.content_container}>
        <div className={styles.scroll_container}>
          <div className={styles.text_container}>
            <h2>Hello!</h2>
            <p>
              I'm Chris, a software engineer at DraftKings who just graduated
              from Northeastern University! To the right is the best picture my
              dad took on our self-guided graduation photoshoot - I love the way
              the sun hits my hair and exposes its naturally brown tint. But I'm
              sure you didn't come here to read about my hair.
            </p>
            <div className={styles.gif_container}>
              <Image src={DoubleDownGif} width={50} height={50} />
            </div>
          </div>
          <div className={styles.image_container}>
            <Image
              src={MeJpg}
              width={400}
              height={400}
              className={styles.circular_image}
            />
          </div>
        </div>
        <div className={styles.scroll_container}>
          <div className={styles.image_container}>
            <Image
              src={RockClimbingJpg}
              width={400}
              height={400}
              className={styles.circular_image}
            />
          </div>
          <div className={styles.text_container}>
            <h2>The most important</h2>
            <p>
              characteristic to note about me is I love being physically active!
              Back in eleventh grade, I decided I wanted to get stronger, so I
              filled two backpacks with books, hung them on either side of a
              shoe rack, and started doing bicep curls.
            </p>
            <p>
              Nowawdays, my workouts are a mix of sports and weightlifting. I
              rock climb two to three times a week at CRG Fenway, run around the
              Charles River twice a week, and follow my homebrewed ab and upper
              body routine at home the rest of the days. I've also played tennis
              since I was six or seven years old, so I occasionally play with
              friends on the weekend.
            </p>
            <p>
              What I choose to do each day, though, doesn't really matter. For
              me, the act of working out my body is therapeutic, so ten minutes
              of anything everyday is all I need to feel right!
            </p>
            <p>
              Pictured: me at the top of a rock climbing wall in Munich, Germany
            </p>
          </div>
        </div>
      </div>
    </CommonView>
  );
};

export default AboutView;
