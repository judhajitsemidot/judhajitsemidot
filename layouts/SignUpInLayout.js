import React from "react";
import { GlobalImage as Image } from "../src/Components/GlobalComponents";
export const SignUpInLayout = ({ children }) => {
  return (
    <>
      <main className="login_signin sign_up_steps" >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-6">{children}</div>
            <div className="col-lg-7 d-none d-lg-block">
              <div className="media_div login_image">
                <Image src="images/log-in-image.png" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
