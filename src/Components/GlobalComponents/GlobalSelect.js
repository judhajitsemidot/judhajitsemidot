import React from "react";
import Select from "react-select";
import uuid from "react-uuid";

export const GlobalSelect = React.forwardRef(
  ({ options, onChange, ...rest }, ref) => {
 
    return (
      <Select
        {...rest}
        options={options}
        onChange={onChange}
        classNamePrefix={rest.classNamePrefix || "fc_select"}
        className={rest.className || null}
        defaultValue={rest.defaultValue || null}
        styles={rest.style || ""}
        ref={ref}
        placeholder={rest.placeholder || ""}
        isClearable={rest.isClearable || false}
        isMulti={rest.isMulti || false}
        isSearchable={rest.isSearchable || false}
        instanceId={`global-${rest.instanceId}` || uuid()}
      />
    );
  }
);
GlobalSelect.displayName = "GlobalSelect";
