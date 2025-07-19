import React from "react";
import { ILabel } from "../utils/types";

const Label = (props: ILabel) => {
  const { label, className, required } = props;
  return <p className={`font-medium text-sm ${label ? "mb-1" : ""} ${className}`}>{label}{required && <span className="ml-1 font-medium text-red-500">*</span>}</p>;
};

export default Label;
