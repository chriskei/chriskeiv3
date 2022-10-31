import React from "react";
import Image from "next/image";

import { ViewContext } from "@pages/home";

const ViewImage = ({ thisView, imgSrc, imgSize, className }) => {
  return (
    <ViewContext.Consumer>
      {({ setCurrentView, setLastOtherView }) => (
        <div
          onClick={() => {
            setCurrentView(thisView);
            setLastOtherView(thisView);
          }}
          className={className}
        >
          <Image
            src={imgSrc}
            width={imgSize}
            height={imgSize}
            priority={true}
          />
        </div>
      )}
    </ViewContext.Consumer>
  );
};

export { ViewImage };
