import React from "react";

export const PageNotFoundLayout = ({ children }) => {
  return (
    <>
      <section className="error404">
        <div className="error-page">
          <div className="container-fluid">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};