import React from "react";
import { GlobalImage as Image } from "../GlobalComponents";


export const Logo = ({ ...rest }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <Image
      src={rest.src || "images/logo.svg"}
      alt={rest.alt || ""}
      title={rest.title || ""}
      className={rest.className || "img-fluid"}
      width={rest.width || 160}
      {...rest}
    />
  );
};
