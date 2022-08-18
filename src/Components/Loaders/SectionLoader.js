import React, { useEffect, useState } from "react";
import { SectionLoaderService } from "../../Services";
import { loaderType } from "./LoaderConfiguration";

export const SectionLoader = () => {
  const [active, setActive] = useState();
  const [type, setType] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    SectionLoaderService.loadingState().subscribe((response) => {
      setActive(() => {
        return response?.dataActive;
      });
      setType(response?.type);
      setText(response?.loaderText);
    });
  }, [active]);

  return (
    <>
      {!active && type === loaderType.SECTION && (
        <div className="text-center py-5">
          <div className="spinner-border" role="status"></div>
          <span className="sr-only d-block mt-2">
            {text !== "" && text !== undefined ? ` ${text}...` : "Loading..."}
          </span>
        </div>
      )}
    </>
  );
};
