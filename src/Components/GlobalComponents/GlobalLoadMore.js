import React, { useEffect, useState } from "react";
import { CommonButtonLoaderService } from "../../Services";
import { loaderType } from "../Loaders";

export const GlobalLoadMore = React.forwardRef((props, ref) => {
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
      <div className="col-md-12 mt-2 clearfix text-center">
        <a
          className={props.className || "btn btn-blue-outline clickable"}
          {...props}
        >
          {props.label}
          {props.children}
        </a>
      </div>
    </>
  ) : (
    !active && type === loaderType.BUTTON_LOAD_MORE && (
      <>
        <div className="col-md-12 mt-2 clearfix text-center">
          <button disabled={!active} className={"btn btn-blue-outline"}>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            &nbsp;{props.label}
            {props.children}
          </button>
        </div>
      </>
    )
  );
});
GlobalLoadMore.displayName = "GlobalLoadMore";
