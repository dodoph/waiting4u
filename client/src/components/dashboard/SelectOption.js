import React from "react";
import { Form } from "react-bootstrap";

export const CheckBox = (props) => {
  return (
      <Form.Check key={props.id}
      onChange={props.handleCheckElement}
      type="checkbox"
      checked={props.isChecked ? props.isChecked : false}
      value={props.value || ""}
      label={props.value} /> 
  );
};

export default CheckBox;