import React, { useState } from "react";

export function GlobalErrorMessage({ errors, arrayName, idx, field }) {
 
  if(!errors[arrayName]){
    return null;
  }
  return <span className="error_customized">{errors?.[arrayName]?.[idx]?.[field]?.message}</span>;
  
}
