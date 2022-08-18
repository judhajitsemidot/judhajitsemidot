import React from "react";

export const GlobalClickableAnchor = React.forwardRef(
  ({ className, children, ...rest }, ref) => {
    return (
      <span className={"clickable " + className} {...rest}>
        {children}
      </span>
    );
  }
);
GlobalClickableAnchor.displayName = "GlobalClickableAnchor";
