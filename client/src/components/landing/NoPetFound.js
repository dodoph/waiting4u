import React from "react";
import { Container } from "react-bootstrap";

export const NoPetFound = () => {
  return (
    <Container className="mytext-center">
      <div className="large">
        <i class="fab fa-earlybirds"></i>
      </div>
      <div>
        <p>Owlf!<br /> 
        Cannot find pets that match all your requirements.<br />
        Please try something different.</p>
      </div>
    </Container>
  );
};

export default NoPetFound;
