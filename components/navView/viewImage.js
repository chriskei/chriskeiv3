import React from "react";
import Image from "next/image";

import { viewMap } from "@utils";

const ViewImage = ({
  viewMapKey,
  imgSrc,
  imgSize,
  setCurrentView,
  setLastOtherView,
  className,
}) => {
  return (
    <div
      onClick={() => {
        setCurrentView(viewMap[viewMapKey]);
        setLastOtherView(viewMap[viewMapKey]);
      }}
      className={className}
    >
      <Image src={imgSrc} width={imgSize} height={imgSize} />
    </div>
  );
};

export { ViewImage };
