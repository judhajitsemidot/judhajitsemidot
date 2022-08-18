import React, { useEffect, useState } from "react";
import { CommonLoaderService } from "../../Services";
import { loaderType } from "./LoaderConfiguration";

export const CommonLoader = () => {
  const [active, setActive] = useState();
  const [type, setType] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    CommonLoaderService.loadingState().subscribe((response) => {
      setActive(() => {
        return response?.dataActive;
      });
      setType(response?.type);
      setText(response?.loaderText);
    });
  }, [active]);

  return (
    <>
      {!active && type === loaderType.COMMON && (
        <div className="custom_overlay">
          <div className="custom_overlay__inner">
            <div className="custom_overlay__content">
              <span className="spinner"></span>
              <p className="text-center text-white mt-2">
                {text !== "" && text !== undefined
                  ? ` ${text}...`
                  : "Please Wait..."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
