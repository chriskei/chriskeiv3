import React from "react";
import Image from "next/image";

import { PongImg } from "@assets";
import styles from "@styles/workView.module.css";

const PongExp = () => {
  return (
    <>
      <div className={styles.exp_image}>
        <Image src={PongImg} width={450} height={300} alt="pong" />
      </div>
      <p>
        Pong Pong Wu is a locally hosted family mahjong dashboard! The name
        refers to one of the highest value hands you can win off of in mahjong.
      </p>
      <p>
        For as long as I can remember, I&apos;ve always been playing mahjong
        with my family. As kids, my sister and I learned by routinely playing
        against our aunties and uncles where we only bet quarters on each hand.
        Some Chinese New Years were also spent at our grandparents&apos; houses
        playing mahjong. I&apos;ve even played with my close friends on dorm
        room dressers in college!
      </p>
      <p>
        In hindsight, it was almost inevitable that this would happen, but in
        recent years, mahjong has become my immediate family&apos;s main family
        activity. Whenever my sister and I were both back home for Christmas or
        summer vacation, we&apos;d take out the mahjong table, play a round, and
        then leave it out in its designated corner, knowing that someone would
        ask if everyone was down for another round of mahjong the next night.
        With some snacks, drinks, and good conversation, family mahjong time is
        something I constantly look forward to.
      </p>
      <p>
        With so many years worth of mahjong, I started to become interested in
        recording our game data to figure out how good I was at the game. Sure,
        I had been playing since I was a little boy and had some backing to my
        record with my fair share of large winning hands, but was I better than
        my parents who had each been playing for over half a century? Was my
        mathematics background giving me an edge in making better moves than my
        veterinarian sister?
      </p>
      <p>
        Another thing my mom always says is that mahjong is more luck than
        skill. To this day, I still don&apos;t agree with her. If all players
        played completely optimally meaning they always knew the best tile to
        throw out as well as whether or not they should take a thrown out tile,
        then it would be up to luck. However, while this calculation seems
        feasible for a computer, it certainly isn&apos;t for us humans as we
        make mistakes lots of times (and if my sister or I take more than 20
        seconds to think, our parents like to make fun of us).
      </p>
      <p>
        At first, I wanted to create a tool that would watch the state of a
        mahjong game from one player&apos;s perspective and always tell you what
        the next optimal move was, similar to a chess engine. This would&apos;ve
        been really cool as I could compare my move to the computer&apos;s move
        to see how I was doing, and we would then be able to see if my win rate
        skyrocketed or still hovered around 25%. However, there seemed to be a
        lot of obstacles to accomplish that without even considering the
        algorithm, the largest being how to track moves in a fast enough way
        that wouldn&apos;t disrupt flow of the game.
      </p>
      <p>
        As a result, I settled on building a mahjong dashboard. The initial
        version was very simple. There was a three question form built with
        Formik to fill out at the end of each hand that would send a POST
        request to add that hand data to a MySQL database. That data was then
        used to calculate lifetime earnings of each family member and display
        that on the page with a Recharts line graph to track change over the
        hands.
      </p>
      <p>
        Aside from the minor inconvenience of getting rate limited by the Google
        Sheets API and having to switch over to use MySQL instead, this
        wasn&apos;t too hard and proved extremely valuable! I kept the dashboard
        next to me as we played mahjong to track each hand and my parents always
        eagerly awaited seeing all of our earnings lines moving simultaneously.
      </p>
      <p>
        That didn&apos;t answer the question of whether or not we should all
        hover around a 25% win rate, though. In mahjong, different hands have
        different payouts, so even if someone was doing the best in lifetime
        earnings, they could&apos;ve had the lowest win rate at the table.
      </p>
      <p>
        The simple solution for this was to create a bar chart using the data
        that was already being inserted into the database! Not only did this
        showcase win rate, but it was also more granular as it showed how many
        hands of each quality each family member had won. This was a great way
        to graphically show that strange relationship between earnings and win
        rate, and you can even see it played out on the image above!
      </p>
      <p>
        After that was built, I was pretty satisfied with the project, but my
        family wanted one more graph: a daily earnings graph. Even though you
        could derive this from the lifetime earnings graph, a lot of the time
        they didn&apos;t care if they were, say, down $20 all-time, they just
        wanted to feel good that they were up $5 today. Adding that just
        required a little bit of math on the backend, and the project was
        complete!
      </p>
      <p>
        So after building this, I&apos;ve come to the conclusion that I&apos;m
        pretty bad at mahjong. Hoping to turn it around this coming winter break
        though!
      </p>
      <p>
        Github:{" "}
        <a
          href="https://github.com/chriskei/mahjong"
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

export { PongExp };
