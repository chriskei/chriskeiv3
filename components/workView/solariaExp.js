import React from "react";
import Image from "next/image";

import {
  SolariaBeginningPng,
  SolariaFlowchartPng,
  SolariaHeroPng,
  SolariaProfilePng,
  SolariaTrendyInsightsPng,
} from "@assets";
import styles from "@styles/workView.module.css";

const SolariaExp = () => {
  return (
    <>
      <div className={styles.exp_image}>
        <Image src={SolariaHeroPng} width={475} height={300} />
      </div>
      <p>
        Solaria Labs was the first company that I co-oped at! I was one of two
        Software Development Co-ops and worked on building up Certainly's auto
        insurance platform.
      </p>
      <p>
        First, again, a little background information. Solaria Labs is Liberty
        Mutual's innovation incubator. This, as it was explained to me, meant
        that projects within Solaria were run with similar motivations and
        energy levels that start-ups might have, yet they also had the financial
        backing and interest of a large corporation.
      </p>
      <p>
        When I started working at Solaria I was a little confused as to why
        Certainly, a website created to give potential customers personalized
        insurance quotes in a fraction of the time that the typical quote
        process would take, wanted to be able to handle auto insurance quotes.
        Didn't Liberty Mutual already offer auto insurance? So why didn't we
        just direct customers over to use Core Liberty's auto quote flow?
      </p>
      <p>
        The answer was that getting auto insurance up and running was tied to
        Solaria's mission. Basically, since the auto insurance quote flow was
        complex and battle-tested through Core Liberty, they wanted to see how
        long it would take Solaria to reverse engineer auto insurance and get it
        running on Certainly. This would then give Solaria a rough time estimate
        on how long it takes to fully support a new type of insurance. If it was
        fast enough, then continuing to build the Certainly platform up would be
        a viable solution for testing more experimental types of insurance in
        the future, such as wedding insurance.
      </p>
      <p>
        In my first month, the Certainly team was just beginning to ramp up and
        expand on the initial quote, modification, and confirmation flow. This
        was perfect because it gave me a little time to ramp up my own skillset
        as a software engineer- I didn't even know React!
      </p>
      <p>
        A little sidenote since this was crucial to getting me to where I am
        today. One key reason why I was able to land Solaria as my first co-op
        was that they didn't have a technical portion to their interview. My
        manager strongly believed that as co-ops, we could and would learn
        everything we needed to know on the job as long as we were willing to
        learn. I was really lucky to find a Software Development Co-op position
        at a company that knew that being able to reverse a linked list doesn't
        really matter, and I'm forever grateful that they gave me the chance to
        work hard and learn from the best.
      </p>
      <p>
        Back to work- to fill in this knowledge gap, I spent a good portion of
        my first couple of weeks going through a bunch of tutorials. I
        meticulously went through the{" "}
        <a
          href="https://reactjs.org/docs/hello-world.html"
          target="_blank"
          className={styles.exp_link}
        >
          React introduction
        </a>{" "}
        and remember struggling a fair bit trying to understand{" "}
        <a
          href=".nestjs.com/providers"
          target="_blank"
          className={styles.exp_link}
        >
          NestJS injectables and decorators
        </a>
        .
      </p>
      <p>
        The other co-op Cari and I also wanted to help out the team in some
        capacity, so we decided to document Core Liberty's auto quote
        questionnaire. For over a week, we painstakingly went through their
        entire questionnaire dozens of times, making sure we hit every possible
        conditional path of questions. These paths were marked in a flowchart so
        that from then on, creating the quote flow on our end could be done
        according to this single static image rather than a dynamic
        questionnaire.
      </p>
      <div className={styles.exp_image}>
        <Image src={SolariaFlowchartPng} width={425} height={250} />
      </div>
      <p>
        After that, I finally felt comfortable enough with both the team and my
        understanding of React to help out on the frontend. In the quote
        questionnaire, I built out some simple questions that used radio buttons
        and date pickers. I also made some adjustments in the modification
        phase, such as how toggle buttons affected available coverage options
        and how the coverage summary was structured. These were all simple
        components, but at this point everything was so new and exciting!
      </p>
      <div className={styles.exp_image}>
        <Image src={SolariaBeginningPng} width={425} height={250} />
      </div>
      <p>
        Around this point was also when Covid struck Boston. A week after my
        20th birthday, with Northeastern announcing that all students were being
        kicked out of school housing, both Cari and I had no choice but to fly
        back to our homes. I must say, Solaria was definitely not the same
        without the fun conversations with my coworkers over lunch or our
        frequent post-work climbing sessions at CRG Boston. However, everyone
        did their best to remain connected and we still laughed together over
        Slack calls and the occasional game of League at night.
      </p>
      <p>
        Now back at home, my manager decided to challenge me and put me on a
        larger project. Before auto insurance, Certainly already had renters
        insurance support which offered additional cyber coverage, so customers
        could see their renters insurance policies from their profile. However,
        the problem was that all of the profile page code was tightly coupled
        with renters-specific data. We needed a solution that could give
        customers a comprehensive overview of their renters, cyber, or auto
        policies one at a time.
      </p>
      <p>
        On its own, at this point in my career that already felt like a big
        task. However, we went a step further. A few months prior, my manager
        had set up Storybook with the goal of turning it into a preview
        environment of all of our frontend components. He didn't have much time
        though, so there were only five or so components on it that nobody was
        ever going to look at.
      </p>
      <p>
        My project became twofold: 1. implement a new component creation process
        using{" "}
        <a
          href="https://atomicdesign.bradfrost.com/chapter-2/"
          target="_blank"
          className={styles.exp_link}
        >
          atomic design
        </a>{" "}
        , and 2. build the profile policy overviews on Storybook through atomic
        design. The goal of this was reusability, as there were definitely tons
        of reused components throughout the quote questionnaire given the
        limited number of form field types, as well as to make Storybook a
        first-class tool.
      </p>
      <p>
        Working through this project was both exhausting and exhilirating. I was
        learning so much about React and Storybook, having fun building up all
        of these small atoms into larger molecules, and putting it all together
        on pages within templates. However, at home, I found that I often took
        less breaks than I did when I was back in the office. The only time I
        went upstairs was really to refill my water cup, and I always gobbled my
        lunch in under 10 minutes and went right back to work. I was also trying
        to get my co-op extended until August, so I thought the best way to get
        that approved was by working even harder, but that ended up burning me
        out later on.
      </p>
      <div className={styles.exp_image}>
        <Image src={SolariaProfilePng} width={425} height={250} />
      </div>
      <p>
        After I wrote docs on how to continue working with Storybook and
        building components with atomic design principles in mind, I moved on to
        other tasks. Among some of these were landing page links that needed to
        be added, new modal logic to show how a single quote modification could
        cause a cascade of coverage changes in other categories, FAQ updates,
        and work on Solaria's internal newsletter system. From each of these, I
        continued to learn more and become increasingly confident in my frontend
        abilities.
      </p>
      <div className={styles.exp_image}>
        <Image src={SolariaTrendyInsightsPng} width={425} height={250} />
      </div>
      <p>
        Throughout my co-op, I also had the opportunity to do some backend work.
        However, I think I only managed to get through one or two backend
        tickets because our backend was daunting, to say the least. From what I
        remember, we had about a dozen microservices and each handled a specific
        part of the system like products, customers, or policies. However, each
        of these microservices was extremely complex, so I barely had time to
        grasp one fully; they talked to each other through gRPC messages, which
        I often got mixed up with our GraphQL schema; and they were spun up with
        Docker, which I didn't understand beyond clicking the run button on the
        Docker Desktop GUI. Our lack of formal infrastructure made testing the
        backend a struggle for everybody, really. And I didn't even mention our
        API Gateway or how often we needed to create a GraphQL introspection PR,
        making fullstack work another pain point.
      </p>
      <p>So I kept my distance from the backend.</p>
      <p>
        The last project I had the opportunity to do a little work on before my
        co-op ended was to initiate support for integrating with third parties
        like Zebra. One piece in this was allowing users to resume their
        progress in the auto quote flow if they left the page early. I was able
        to create a first pass at using IDs as query params within the URL to
        redirect a user to their modification page.
      </p>
      <p>
        As my co-op came to a close, I wrote some final docs to help the next
        batch of co-ops out and then made a little presentation on all that I
        did, which is where all of these (low quality, sorry) pictures came
        from!
      </p>
      <p>
        Solaria, thank you for not only giving me life long skills but also life
        long friends. In the spring of 2022, I got dinner with Cari, my manager,
        and another coworker who I bonded over Northeastern and TFT with. If you
        see this, I'm looking forward to our next little get together!
      </p>
      <p>
        Website:{" "}
        <a
          href="https://www.getcertainly.com/"
          target="_blank"
          className={styles.exp_link}
        >
          link
        </a>
      </p>
    </>
  );
};

export { SolariaExp };
