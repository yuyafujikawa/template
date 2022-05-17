import React from "react";
import classes from "./CustomInput.module.css"
const CustomInput = React.forwardRef((props,ref) => {
  return (
    <div class= {classes.container}>
    <input placeholder = "text" class = {classes.input} ref= {ref} {...props}></input>
    </div>

  );
});

export default CustomInput;
