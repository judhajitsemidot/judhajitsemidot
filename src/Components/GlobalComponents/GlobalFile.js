import React, { useState } from "react";

export const GlobalFile = React.forwardRef(
  ({ id, name, className, onImageChange, onChange, ...rest }, ref) => {
    const [imageData, setImageData] = useState({});

    function handleImageChange(e) {
      e.preventDefault();
      const target = e.target;
      let reader = new FileReader();
      let file = e.target.files[0];
      const name = target.name;
      const image = name + "_file";
      // const value = reader.result;
      reader.onloadend = () => {
        let imageTemp = {};
        onImageChange({
          ...imageTemp,
          [image]: file,
          [name]: reader.result,
        });
        setImageData({ ...imageData, [image]: file, [name]: reader.result });
      };
      reader.readAsDataURL(file);
    }

    return (
      <>
        <input
          type="file"
          id={id}
          name={name}
          className={className || "form-control"}
          ref={ref}
          {...rest}
          onChange={(e) => handleImageChange(e)}
        />
      </>
    );
  }
);
GlobalFile.displayName = "GlobalFile";
