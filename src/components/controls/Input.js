import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props) {
  const {
    name,
    label,
    type,
    value,
    size,
    width,
    error = null,
    onChange,
    rows,
    ...other
  } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      type={type}
      size={size}
      onChange={onChange}
      width={width}
      rows={rows}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
