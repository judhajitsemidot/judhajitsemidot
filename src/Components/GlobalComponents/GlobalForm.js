import React from "react";
import { SwitchLoader } from "../../common";
import { loaderType } from "../Loaders";

export const GlobalForm = React.forwardRef((props, ref) => {
  const onSubmit = (event) => {
    event.preventDefault();
    SwitchLoader(loaderType.BUTTON);
    props.onSubmit(event);
  };

  // console.log(props);
  return (
    <>
      {props && props !== "" && (
        <form {...props} onSubmit={(e) => onSubmit(e)}>
          {props.children}
        </form>
      )}
    </>
  );
});
GlobalForm.displayName = "GlobalForm";
