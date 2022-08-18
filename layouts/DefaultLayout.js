import React, { useEffect, useState } from "react";
import { getUserData } from "../src/Authentication/Auth";
import { ScrollToTop } from "../src/Components/CommonSections";
import { Footer, Header, HeaderWhite } from "../src/Components/Layouts";
 
export const DefaultLayout = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (getUserData().isUserAuthenticated) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [authenticated]);
  return (
    <>
      {authenticated  ? <HeaderWhite /> :<Header />}
        {children}
       <ScrollToTop />
      <Footer />
    </>
  );
};
