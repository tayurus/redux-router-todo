import React from "react";
export const Input = props => {
  return (
    <input
      className={"form-control " + (props.className || "")}
      type={props.type || "text"}
      placeholder={props.placeholder || ""}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
