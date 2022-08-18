import React, { useEffect, useState } from "react";
import { CommonButtonLoaderService } from "../../Services";
import { loaderType } from "../Loaders";

export const GlobalSubmit = React.forwardRef((props, ref) => {
  const [active, setActive] = useState();
  const [type, setType] = useState();
  useEffect(() => {
    setActive(true);
    return () => {
      setActive(true);
    };
  }, []);

  CommonButtonLoaderService.loadingState().subscribe((response) => {
 
    setActive(response?.dataActive);
    setType(response?.type);
  });

  return active && props && props !== "" ? (
    <>
      <button
        type={"submit"}
        className={props.className || "btn btn-yellow"}
        {...props}
      >
        {props.label}
        {props.children}
      </button>
    </>
  ) : (
    !active && type === loaderType.BUTTON && (
      <>
        <button disabled={!active} className={"btn btn-yellow w-100"}>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          &nbsp;{props.label}
          {props.children}
        </button>
      </>
    )
  );
});
GlobalSubmit.displayName = "GlobalSubmit";
