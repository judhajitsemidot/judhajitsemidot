import React, { useState, useEffect } from "react";
import { getUserData } from "../src/Authentication/Auth";
import { HeaderWhite, Footer } from "../src/Components/Layouts";

export const ProfileLayout = ({ children }) => {
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
      {authenticated && <HeaderWhite />}
      {children}
 
    </>
  );
};
