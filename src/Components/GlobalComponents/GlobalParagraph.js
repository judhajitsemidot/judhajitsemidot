import React from "react";

export const GlobalParagraph = React.forwardRef(
  ({ title, description, ...rest }, ref) => {
    return (
      <>
        {title && <h5 className="title4 initial-text">{title}</h5>}
        {description && <p>{description}</p>}
      </>
    );
  }
);
GlobalParagraph.displayName = "GlobalParagraph";
