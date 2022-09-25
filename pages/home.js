import React, { useState } from "react";
import { AboutView, ContactView, NavView, WorkView } from "@views";
import FourOhFour from "./404";

const Home = () => {
  const [view, setView] = useState("nav");

  switch (view) {
    case "nav":
      return <NavView setView={setView} />;
    case "about":
      return <AboutView setView={setView} />;
    case "work":
      return <WorkView setView={setView} />;
    case "contact":
      return <ContactView setView={setView} />;
    default:
      return <FourOhFour />;
  }
};

export default Home;
