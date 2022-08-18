import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const GlobalTooltip = React.forwardRef(
  ({ text, children, ...rest }, ref) => {
    return (
      <>
        <OverlayTrigger
          delay={{ hide: 450, show: 300 }}
          overlay={(props) => <Tooltip {...props}>{text}</Tooltip>}
          placement="bottom"
        >
          {children}
        </OverlayTrigger>
      </>
    );
  }
);

GlobalTooltip.displayName = "GlobalTooltip";
