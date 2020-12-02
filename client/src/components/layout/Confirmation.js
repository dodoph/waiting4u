import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const Confirmation = (props) => {
  return (
    <Fragment>
      <h3 className="mytext-primary">
        <i className="fas fa-check-circle"></i>Thank you for contacting us!
      </h3>
      <p>Your message is sent successfully. </p>

      <ul>
        <li><strong>Name:</strong> {props.location.state.name}</li>
        <li><strong>Email:</strong> {props.location.state.email}</li>
        <li><strong>Message:</strong> {props.location.state.message}</li>
        <li><strong>Pet Name:</strong> {props.location.state.petName ? props.location.state.petName : "N/A"}</li>
      </ul>
      
      <div>
        <Button href="/" style={{marginTop: "1rem"}}>Go Back</Button>
      </div>
    </Fragment>
  );
};

export default Confirmation;
