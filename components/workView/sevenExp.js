import React from "react";
import Image from "next/image";

import { SevenImg } from "@assets";
import styles from "@styles/workView.module.css";

const SevenExp = () => {
  return (
    <>
      <div className={styles.exp_image}>
        <Image src={SevenImg} width={400} height={300} alt="seven" />
      </div>
      <p>7PM was the first full stack website that I built on my own!</p>
      <p>
        In February 2020, I applied for the Capital One Software Engineering
        Summit. In order to be considered for the program, all applicants were
        given the very open-ended prompt of creating any application that used
        the Yelp Fusion API.
      </p>
      <p>
        At the time, I was working at Solaria Labs and had a little bit of
        frontend experience, so I thought to myself, why not use this as an
        opportunity to learn how to build a website from the ground up?
      </p>
      <p>
        The first thing I needed to figure out was how to host the website. Even
        though I probably could&apos;ve just submitted my source code and had
        them load up the page locally, learning more about this process was what
        I was really going after when I decided to build a website and I knew it
        would be valuable knowledge in the future. So during my next 1-on-1 at
        work with my mentor Tony, I asked him if he could give me a few pointers
        and he told me to check out Heroku!
      </p>
      <p>
        After doing a bit of exploration, I landed on{" "}
        <a
          href="https://medium.com/@chloechong.us/how-to-deploy-a-create-react-app-with-an-express-backend-to-heroku-32decfee6d18"
          target="_blank"
          rel="noreferrer"
          className={styles.exp_link}
        >
          this
        </a>{" "}
        Medium guide. This was perfect since it went through the basics of
        Heroku and help set the groundwork for my Express backend to handle
        calls to the Yelp Fusion API in easy-to-follow language!
      </p>
      <p>
        When I had that foundation in place, I was finally able to focus on
        interacting with the API and designing the UI. Around now was also when
        I committed to the idea of using Yelp data to help users find
        restaurants to go to when they didn&apos;t know what to eat.
      </p>
      <p>
        Since I was on a time crunch given my work and gym schedule, I decided
        to achieve this goal in a very simple manner. By giving users five
        random cuisines, I could encourage them to try new cuisines they
        hadn&apos;t had before and they didn&apos;t have to go through 100+
        cuisines just to find a restaurant. I also made the form require minimal
        input for the same reason; the user just had to enter the price range
        and distance of restaurants they wanted to see.
      </p>
      <p>
        At this point, the website was spitting out relevant restaurants! It was
        functional and it met the minimum requirements for the Summit
        application. But it felt boring.
      </p>
      <p>
        So to make the website more interactive, I decided to use the Mapbox API
        to render a map that would plot the locations of the relevant
        restaurants. Upon clicking the markers, you&apos;d be able to see info
        about that restaurant including its cuisine and price range as well as a
        link to its Yelp entry for more information.
      </p>
      <p>
        Once the map was complete, there were just a few small finishing touches
        left to further enhance the website. One that I really liked working on
        and later playing with was the clickable restaurant tabs at the bottom
        of the page that would smoothly scroll the map to the clicked
        restaurant!
      </p>
      <p>
        Overall, for my first full stack website that was mostly self-guided, I
        was extremely pleased with the outcome! Not only was there complete,
        interesting functionality, but the website also still works today! And
        7PM did end up landing me a spot in the Summit where I had a great time
        getting exposed to lots of new technology.
      </p>
      <p>
        Website:{" "}
        <a
          href="http://sevenpm.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.exp_link}
        >
          link
        </a>{" "}
        | Github:{" "}
        <a
          href="https://github.com/chriskei/sevenpm"
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

export { SevenExp };
