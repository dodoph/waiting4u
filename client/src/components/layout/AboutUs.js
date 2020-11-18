import React, { Fragment } from "react";
import { Jumbotron } from "react-bootstrap";

import logo from "../../../src/img/take-me-home-logo.jpg";

export const AboutUs = () => {
  return (
    <Fragment>
      <Jumbotron>
        <h1 className="page-header">
          About “Waiting4U”
        </h1>
        <p className="lead mytext-center">Finding your purfect-match!</p>
      </Jumbotron>

      <div>
        <p>
          What better way to match future pet owners up with available animals
          than a swipe-ready dating app! Our team, the “Waiting4U”, will create
          a platform for the candidates that are looking for their perfect
          pet-match. We will simulate the popular dating experience, the only
          difference is that candidates are trying to find their perfect
          four-legged friends, who provide best companions and 100% loyal to
          them.
        </p>
        <img
          src={logo}
          className="center"
          alt="take-me-home-logo"
          style={{ maxWidth: "fit-content" }}
        />
        <p className="mytext-center">
          Contact us: <br></br>
          Email: generaladmin@waiting4u.com <br></br>
          Phone: 123-456-7890
        </p>
      </div>
    </Fragment>
  );
};

export default AboutUs;
