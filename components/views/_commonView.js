import React from "react";
import Image from "next/image";

import { ChevronsUp } from "@assets";

const CommonView = ({ setView, children }) => {
  return (
    <div>
      <Image
        src={ChevronsUp}
        width={100}
        height={100}
        onClick={() => setView("nav")}
      />
      {children}
    </div>
  );
};

export default CommonView;
