import React from "react";

const NavView = ({ setView }) => {
  return (
    <div>
      <h1 onClick={() => setView("about")}>about</h1>
      <h1 onClick={() => setView("work")}>work</h1>
      <h1 onClick={() => setView("contact")}>contact</h1>
    </div>
  );
};

export default NavView;
