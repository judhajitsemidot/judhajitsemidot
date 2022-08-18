/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  appendBasePathOnProd,
  imageContains,
  placeHolderImage,
} from "../../common";

export const GlobalImage = ({ src, alt, title, className, ...rest }) => {
  const [imagePath, setImagePath] = useState("");
  useEffect(() => {
    if (src && src != "") {
      setImagePath(() => {
        // Due to Amazon S3 functionality Done Later, so it is better to Change Here as compare to all the pages
        if (rest.imageFromServer) {
          return imageContains(src);
        } else if (rest.previewImage) {
          return imageContains(src);
        }
        return appendBasePathOnProd(src);
      });
    } else {
      setImagePath(() => {
        return appendBasePathOnProd(placeHolderImage);
      });
    }
  }, [src]);

  return (
    <>
      <img
        src={imagePath}
        alt={alt || ""}
        title={title || ""}
        className={className || rest.class || "img-fluid"}
        width={rest.width || ""}
      />
    </>
  );
};
