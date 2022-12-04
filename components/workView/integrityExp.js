import React from "react";
import Image from "next/image";

import { IntegrityJpeg, IntegrityTablePng } from "@assets";
import styles from "@styles/workView.module.css";

const IntegrityExp = () => {
  return (
    <>
      <div className={styles.exp_image}>
        <Image src={IntegrityJpeg} width={550} height={125} />
      </div>
      <p>
        During my third year at Northeastern, I was a Software Engineering Co-op
        at INTEGRITY Security Services!
      </p>
      <p>
        Before we get to the dense work that I did, I just want to say that
        Integrity was a wonderful place to work! Despite the fact that we were
        still mid-pandemic and pre-vaccine in January 2021, since day one we
        always had the same, small cohort of me, two other co-ops (shoutout to
        Milan and Michaela), and three software engineers (and Neil, Chris, and
        Zack!) who came in almost every day. I loved being back to working in
        person and getting to talk with coworkers, have silly conversations,
        share Friday lunches, and play lots of chess together! The work culture
        was great, and I'm so glad I got to experience the tight-knit,
        hardworking community that Integrity has.
      </p>
      <p>
        Now to the bulk of it. This one's gonna read very different from my
        other experience entries because I'm gonna go through a detailed
        month-by-month walkthrough of my time at Integrity. For full
        transparency, the reason for this and for how I remember most of what I
        did at Integrity is because I took lots of notes on every ticket that I
        worked on as I was offboarding. I learned so much and got to touch
        basically every part of the system I worked on, so I didn't want to
        forget that work, and to be honest I definitely would have if I didn't
        have these notes. Also, we used a lot of company-specific terminology
        that was honestly more complex than it needed to be, so for simplicity's
        sake, most projects are going to be explained in easier-to-grasp terms
        that stay true to the main concepts I had to deal with.
      </p>
      <p>
        <u>January</u>
      </p>
      <p>
        Well, actually prior to January. When I was interviewing with Integrity,
        the team that caught my ear the most was Over-The-Air (OTA) Device
        Management. To be honest, I had no idea what that really meant, but the
        work sounded cool. I felt like I would get to learn the nitty gritty
        details about how vehicles get software updates and I would get lots of
        exposure to a backend system, which was a perspective I very much wanted
        after my mostly frontend first co-op. More on what exactly OTA was will
        slowly be revealed, similar to how I slowly got more and more
        information as my time at Integrity went on!
      </p>
      <p>
        Fast forward to January. All three co-ops were put on separate teams,
        and I was put on the OTA team! I was super excited about this.
      </p>
      <p>
        My first ticket tells a much different story, though. All my notes say
        is there was some bug with duplicate operations not getting executed,
        but what I remember is sitting in a Microsoft Teams call with one of my
        team members and being absolutely lost. I literally just sat there and
        tried to process what he was saying was wrong while simultaneously
        trying to understand what the code was supposed to be doing.
      </p>
      <p>
        After a brutal three hour call, we submitted a PR together and I called
        it a day. I was completely drained and I really felt like I wasn't smart
        enough to be co-oping at Integrity. I was also a bit jealous because the
        other two co-ops had larger teams and team members who came into the
        office. The OTA team consisted of three engineers, including myself, and
        one technical manager, so I felt like I was just out there struggling
        alone.
      </p>
      <p>
        The next day, I went back and thoroughly went through the part of the
        system that my team member and I were looking at the day before. I took
        my time, this time alone, making sure to fully understand what was wrong
        and why our fix worked.
      </p>
      <p>
        For the rest of January, this early failure drove me to push myself
        hard. I wanted to be here, I saw that I could learn so much, and I
        wanted to be a useful engineer, so I promised myself that I'd make a
        huge impact on OTA.
      </p>
      <p>
        The next couple of problems I solved were relatively minor, like fixing
        how some of our tables handled sorting, adding filters to different
        columns, and working through pagination errors. However, along the way,
        I was always able to ping my team members for help and they'd instantly
        respond, and these tickets went a lot smoother, so I felt much better
        about my place on the team.
      </p>
      <p>
        <u>February</u>
      </p>
      <p>
        February was still all about me getting up to speed. What I learned,
        though, was team dynamics. And to be honest, there weren't many.
      </p>
      <p>
        I forget if this actually happened in February, but at some point pretty
        early on, I was told that the two other OTA engineers were getting put
        on a Device Lifecycle Management (DLM) tiger team. DLM was getting
        pretty big, but it was plagued with a ton of old React code that was
        very reliant on the Meteor framework, so they needed some engineers to
        convert all of that into functional, hook-based React.
      </p>
      <p>
        What this meant for me was that I was basically the sole engineer on my
        team. Standup consisted of my updates and basically nothing else. I
        still had my manager setting up tickets for me and help from the other
        two engineers was just a Teams message away, but for the most part, I
        had a lot of freedom. Again, at first this was not exactly what I
        wanted, but I soon learned to appreciate the freedom I had in choosing
        what I wanted to work on and little add ons in implementation.
      </p>
      <p>
        One of those self-decided projects was to abstract a microservice that
        handled job queues. Basically, we had three queues for our various
        clients that all had very similar code. Since this microservice was
        pretty isolated and it touched AWS, as I was going through the codebase
        I thought this abstraction would be useful whenever we had to make
        future changes to how jobs were consumed and I would learn some useful
        skills along the way.
      </p>
      <p>
        Another project I worked on was adding pagination to our portal logs.
        Since we had thousands of entries worth of CRUD operations on vehicle
        parts and softwares, not paginating those entries meant the browser
        would actually crash for a minute as it was grabbing all the logs for
        us. Everyone just avoided the logs page because of that, but I didn't
        like how broken that part of our portal was so I researched how Meteor
        handled pub/sub and got to work.
      </p>
      <p>
        <u>March</u>
      </p>
      <p>
        In March, work started to get fun. One pain point my manager revealed to
        me was that every quarter, he'd have to run a series of Mongo queries to
        grab data regarding our clients' OTA usage, which would then be used to
        charge our clients. Even though running these queries was pretty fast,
        sometimes he'd forget to do it and wouldn't realize until someone on the
        sales team asked. So what he wanted me to create was a lambda that would
        be run every quarter on a cron job and automatically send an email with
        the data for each client to both him and the sales team.
      </p>
      <p>
        Since this was a completely new lambda, I got to learn exactly how we
        spun a new microservice up, from creating the serverless.yml file to
        deploying the service on Jenkins. Additionally, I got to work with email
        servers which was interesting, and I even got to name the microservice!
        Since OTA already had a bunch of fun names like Artemis and Oven, this
        one became the Tax Collector.
      </p>
      <p>
        However, one of the coolest parts of this project, at least in my
        opinion, was that I was able to incorporate something that I learned
        from my algo course into it. One of the metrics that we needed to
        collect from our clients was the peak number of products that they had
        active at any point within the quarter. Since products could be enabled
        and disabled, they may have switched from active to inactive or vice
        versa multiple times in one quarter, so this wasn't just a trivial
        MongoDB query.
      </p>
      <p>
        This, you might have realized, is exactly the maximum overlapping
        intervals problem! Basically, if we had every date range for which
        products were enabled within a quarter, we could take those as our
        intervals, sort two arrays by increasing start and increasing end, and
        then run through the sorted arrays in parallel to get our max value. I
        updated the data structure for these products to add support for these
        date ranges as well as any future enable/disable switches and excitedly
        implemented the algorithm.
      </p>
      <p>
        Sadly, this lambda didn't work entirely correctly on the first go. Since
        the quarter was scheduled to end on March 15 and I had only started when
        March already began, I was rushing towards the end and remember staying
        at work late on Friday, March 12 deploying the Tax Collector on Jenkins.
        On Monday, the email did get sent, but it was sent at the wrong time and
        no data was actually on it due to a mustache template mistake. I fixed
        these problems that day and made sure the correct email got sent out,
        but I learned that sometimes it's better not to rush things, especially
        since I could've just asked my manager to manually calculate everything
        for one more quarter to give me time to double check my work.
      </p>
      <p>
        Another cool feature I got to work on came from our clients. At this
        point, it was explained to me that we worked with a client who
        specifically managed fleets of trucks across the United States. All they
        wanted was a way to see where their trucks were from our portal.
      </p>
      <p>
        This wasn't too much work- all I really had to do was grab the vehicle's
        location data if it existed in some message object and show it on a map.
        I had complete control over researching third party map APIs so I ended
        up on picking{" "}
        <a
          href="https://react-leaflet.js.org/"
          target="_blank"
          className={styles.exp_link}
        >
          React Leaflet
        </a>{" "}
        since they had good docs and I remember other dependencies causing
        issues on our end. I also wanted to explore options outside of Mapbox
        which I used for my 7pm project.
      </p>
      <p>
        After everything was put together, it was fun clicking on random
        vehicles on our prod portal and seeing that they last contacted us while
        on the highway or in a rest stop!
      </p>
      <p>
        <u>April</u>
      </p>
      <p>
        From here on out, I started doing a lot more interesting work. Frankly,
        there's so much left that I want to write and this whole entry is
        getting really long already, so I'm gonna skip all the small, boring
        tickets like abstracting table names and updating user permissions that
        I did. Just know that what I choose to dive into here isn't everything I
        worked on!
      </p>
      <p>
        There was really only one big project I took on in April which was
        exporting table data to a CSV file. To be honest, I don't remember this
        project being super technical. What it was, though, was a lot of
        documentation reading to figure out why certain API functions weren't
        working, user experience work to find the best way to provide our
        clients with a time estimate on their download, and nginx debugging to
        stop our network connection from dropping and throwing off our export.
      </p>
      <p>
        <u>May</u>
      </p>
      <p>
        Four months into co-op, I finally got to work on the core OTA system! I
        probably can't go into all of the details of the system for legal
        reasons, but basically we managed an extremely complex deterministic
        finite automaton that conformed to the{" "}
        <a
          href="https://www.openmobilealliance.org/release/DM/V2_0-20150122-C/OMA-TS-DM_Protocol-V2_0-20150122-C.pdf"
          target="_blank"
          className={styles.exp_link}
        >
          Open Mobile Alliance Device Management (OMADM) Protocol
        </a>
        . This is essentially a standard for how "DM Servers", which Integrity
        hosted, can communicate with and serve updates to "DM Clients", which
        were devices installed on our clients' vehicles. I spent well over a
        week researching the OMADM Protocol, taking notes on the above 106 page
        spec, and understanding our implementation of it, before I felt
        comfortable starting to code.
      </p>
      <p>
        As I mentioned, Integrity already had the architecture and an
        implementation to handle the protocol. On some of our clients' devices,
        though, we were seeing that a specific system-wide setting regarding
        when clients contacted us was getting triggered far too often. This
        often caused an influx of update requests, resulting in increased
        latency and higher bills for our clients.
      </p>
      <p>
        To fix this, our clients wanted to be able to set rate limits through
        device-wide configuration parameters to override default behaviors.
        These would essentially just be key-value pairs that could be set on our
        portal. Then, upon any contact with the DM Server, the device would run
        through the parameters set on it and if it was programmed to recognize
        any of the keys, it would act appropriately.
      </p>
      <p>
        Building this out was difficult. There were so many moving parts, both
        big and small. I had to figure out my new handler's place in the overall
        architecture; call other microservices to compute the diff between
        server and client configs; assume how the devices would act in certain
        scenarios upon receiving packages; figure out alternative data
        representations due to Mongo restrictions; create the UI to set config
        parameters on our portal, which actually went well into June; write
        three new end-to-end tests on a broken system; and extensively test my
        software with a Russian hardware contractor who modified a device in
        real-time while I set parameters up on the portal.
      </p>
      <p>
        However, thanks to my manager's well-defined project requirements as
        well as lots of assistance from Neil in understanding the surrounding
        context, this project was a huge success! Working with that contractor
        and getting to see the software I wrote work almost flawlessly in such a
        complex system was an amazing feeling, and I was so happy at the
        progress I had made since January.
      </p>
      <p>
        <u>June</u>
      </p>
      <p>
        After my device config work was up and running, even though I fulfilled
        all of the project requirements, I wasn't satisfied yet. Midway through
        May, I noticed that we needed to perform a lot of computationally-heavy
        logical operations in order to calculate config diffs. There wasn't much
        that could be done to make the algorithm faster.
      </p>
      <p>
        However, what we could do to speed things up drastically was add in a
        cache. Since we managed fleets of vehicles, vehicles within the same
        fleet usually had the same type of devices installed on them. This meant
        that those vehicles' devices would almost always be at one of two config
        states: the old config that all devices had at one point or the newest
        config set on our portal. Therefore, if a fleet had 3000 vehicles, we
        didn't actually need to calculate 3000 diffs; we could just calculate
        one diff for the first vehicle that contacted us, cache that, and use
        that for any other devices that were going to and from the same state!
      </p>
      <p>
        The caching and updating part was cool to work on because it gave me
        some more exposure to Redis and I was able to use previously built out
        diff addition and removal functions in a more natural way. However, what
        I enjoyed working on most and what enabled caching and updating to work
        efficiently was my hashing algorithm.
      </p>
      <p>
        What we needed was a way to use device configs to create Redis keys for
        diffs and diff updates. One key problem, though, was deep object
        equality since config states could theoretically have all of the same
        key-value pairs but not have them in the same order due to slight device
        or config file order differences.
      </p>
      <p>
        To solve this, what I developed was a way to obtain a deterministic hash
        for a generic object. This essentially used a combination of key sorting
        and depth-first path decomposition to get an object's unique array
        representation. With that, we could simply go down the line and use each
        string in the array to update our hash. The final hash would become our
        Redis key and allowed us to map configs to diffs and diff updates.
      </p>
      <p>
        This was by far one of the most technical projects I've ever worked on,
        and I truly learned so much, had a ton of fun brainstorming with
        coworkers, and loved implementing theoretical solutions in code!
      </p>
      <p>
        <u>July</u>
      </p>
      <p>
        After getting a taste of how bad our e2e test infrastructure was in the
        device config project, the first thing I did in July was improve it.
      </p>
      <p>
        What I wanted was simply an easier way to run a subset of our e2e tests.
        Previously, if you wanted to run only one specific e2e test which I
        often wanted to do to save time, the easiest way to do that would be to
        pass a dozen or so environment variables to the test script to skip
        tests in all other test groups and then go comment out the other tests
        in the test group of the one test you wanted. This second part was still
        a hassle since test files weren't separated by test group so you had to
        go hunt for your tests.
      </p>
      <p>
        Inspired by{" "}
        <a
          href="https://www.npmjs.com/package/aws-azure-login"
          target="_blank"
          className={styles.exp_link}
        >
          aws-azure-login
        </a>
        , I decided to create a CLI for our e2e tests using{" "}
        <a
          href="https://www.npmjs.com/package/inquirer"
          target="_blank"
          className={styles.exp_link}
        >
          inquirer
        </a>
        . Using the arrow keys and space bar, I made it possible to
        automatically select all tests or pop into test groups with a file
        structure-esque UI to select specific tests to be run.
      </p>
      <p>
        This took many hours peering over poorly maintained{" "}
        <a
          href="https://docs.python.org/3/library/unittest.html"
          target="_blank"
          className={styles.exp_link}
        >
          unittest
        </a>{" "}
        documentation, a whole directory restructuring job to support automatic
        test discovery, and a new docs page to explain what I learned about the
        e2e test process and how the new CLI played into that so that future
        engineers wouldn't have to struggle to figure our e2e system out.
        However, in the end, this resulted in a vastly cleaner structure as well
        as a quicker and more interactive way to run our e2e tests!
      </p>
      <p>
        My final large project at INTEGRITY was establishing advanced search on
        our vehicles table. With thousands of vehicles on our portal, our table
        columns only being able to support one filter wasn't cutting it when
        trying to find a very specific selection of vehicles. Additionally, our
        clients wanted the ability to search for vehicles according to software
        versions that internal vehicle software was at, which was too complex
        and nested within the vehicle data to have as a table column, as well as
        vehicles that had user-generated tags on them.
      </p>
      <p>
        After doing some research on how other websites like Google and Twitter
        handled advanced search, I didn't particularly like any of them so I
        decided to homebrew it. What I came up with was a simple form that used
        radio buttons to add a filter on "SOFTWARE VERSIONS" or "VEHICLE TAGS"
        and a textbox for each desired version or tag. Multiple filters could be
        added and then processed to search for vehicles that matched "ANY" or
        "ALL" of these filters. Later on, I also added support to negate search
        parameters, such as if you wanted to get all vehicles that did not have
        software AAPL_GUI at version 11.5.2.
      </p>
      <p>
        The backend was simple. Upon form submission, all filters were sent to a
        new HTTP endpoint. Since MongoDB queries are super fast, we merged these
        filters into one large query efficiently and then executed this query
        over our vehicles table. The result was our paginated advanced search
        results which were sent back to the portal and displayed in a secondary
        vehicle table that supported basic table sorting, filtering, and
        exporting.
      </p>
      <p>
        Despite some complex logic, our advanced product search was extremely
        performant. I didn't just see it in action and decide that- I also did
        some benchmark testing after it was complete because, similar to my
        device config work, I wondered if caching could improve performance.
        However, I was afraid of premature optimization since, unlike device
        configs, cached advanced searches were not guaranteed to be reused, so I
        wanted to see concrete numbers first.
      </p>
      <p>
        To set up, I wrote a bunch of scripts to migrate vehicles into our test
        environment and add different tags to them. Then, I created four filter
        tests: a simple filter that resulted in a small number of vehicles, a
        complex filter that resulted in a small number of vehicles, a simple
        filter that resulted in a large number of vehicles, and a complex filter
        that resulted in a large number of vehicles. These four tests were run
        ten times on both our system without caching implemented and our system
        with caching implemented and the results were averaged.
      </p>
      <div className={styles.exp_image}>
        <Image src={IntegrityTablePng} width={400} height={125} />
      </div>
      <p>
        What I found was that without caching, our search was blazing fast.
        Simple filters were processed in under 0.2 milliseconds and complex
        filters were only taking 2 milliseconds at the high end. With caching,
        retrieving cached searches consistently took around 0.8 milliseconds,
        which made sense since a cache look up should be constant regardless of
        the filter complexity. However, creating that cache took so much more
        time that the numbers weren't even in the same order of magnitude
        anymore.
      </p>
      <p>
        After seeing the numbers, caching clearly wasn't worth it. Even in the
        ideal scenario of our clients having a complex filter that resulted in a
        large number of vehicles, caching only broke even time-wise after the
        cache was used over a thousand times. Aside from realistic advanced
        search usage concerns, the cache would also have to be invalidated
        whenever new vehicles were added or any vehicle's data changed, so it
        was extremely unlikely we would ever break even on this tradeoff.
        Furthermore, 2 milliseconds is already extremely fast to begin with, so
        the 1.2 milliseconds we gain from cache look ups really are negligable
        in such a small-scale system.
      </p>
      <p>
        Looking back, I probably didn't even have to implement and test caching
        after seeing the no cache solution only took 2 milliseconds. However, I
        learned a lot from this experiment and was oddly satisfied seeing my
        theoretical expectations validated by empirical results.
      </p>
      <p>
        <u>August</u>
      </p>
      <p>
        I really only worked at INTEGIRTY for two and a half days in August. In
        those few hours, I finished three small tickets which cleaned up Tax
        Collector emails, our software tree GUI, and filtered CSV exports. I
        also took these extensive notes during that time!
      </p>
      <p>
        On my last day, I brought Blackbird donuts into the office and spent the
        entire morning playing chess with my coworkers. After lunch, I said my
        goodbyes and hopped on the Amtrak back to New York where I relaxed for
        the remainder of the summer!
      </p>
      <p>
        Unfortunately, there's no website link or powerpoint images to see any
        of what's written above since nothing we built was public-facing. But
        you can check out{" "}
        <a
          href="https://www.ghsiss.com/"
          target="_blank"
          className={styles.exp_link}
        >
          ISS' website
        </a>{" "}
        for more info on the company!
      </p>
    </>
  );
};

export { IntegrityExp };
