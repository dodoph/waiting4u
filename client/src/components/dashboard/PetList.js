import React from "react";
import { Button } from "react-bootstrap";

export const PetList = (props) => {
  return (
    <tr key={props.index}>
      <td>{props.pet_name}</td>
      <td>{props.description}</td>
      <td>
        <Button>Edit</Button>
      </td>
      <td>
        <Button>Delete</Button>
      </td>
    </tr>
  );
};

export default PetList;
