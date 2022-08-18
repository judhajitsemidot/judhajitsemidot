/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React from "react";
import Script from "next/script";
import { NotificationContainer } from "react-notifications";
import { appendBasePathOnProd } from "../src/common";

export const CoreLayout = ({ children }) => {
  return (
    <>
      <Script
        src={appendBasePathOnProd("static/js/jquery-3.6.0.min.js")}
        strategy="beforeInteractive"
      />
      {/* <Script
        src={appendBasePathOnProd("static/js/popper.min.js")}
        strategy="beforeInteractive"
      />
      <Script
        src={appendBasePathOnProd("static/js/bootstrap.min.js")}
        strategy="beforeInteractive"
      /> */}

      <div id={"root"} className={"root"}>
        <div className={"App"}>
          {children}
          <NotificationContainer />
        </div>
      </div>
    </>
  );
};
