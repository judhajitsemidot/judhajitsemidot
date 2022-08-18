import React from "react";
import { GlobalImage as Image } from "../GlobalComponents";


export const CarouselItemInfo = ({imgSrc, imgAlt, imgTitle, imgClassName,userDescHeading, userDescPara, quoteTestPara}) => {
  return (
    <>
      <div className="userInfo">
        <Image
          src={imgSrc}
          alt={imgAlt || "Carousel Item"}
          title={imgTitle}
          className={imgClassName}
        />

        <div className="userDes">
          <h4>{userDescHeading}</h4>
          <p>{userDescPara}</p>
        </div>
      </div>
      <div className="quoteTest">
        <p>
          {quoteTestPara}
        </p>
      </div>
    </>
  );
};
