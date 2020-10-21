import React from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MyCarousel from "../landing/MyCarousel";
import Search from "../landing/Search";
import MyCards from "../landing/MyCards";

export const Landing = () => {
  return (
    <Container>
      <Row>
        <div className="myCarousel">
          <MyCarousel />
        </div>
      </Row>

      <Container>
        <Row>
            <Search />
            <MyCards />
        </Row>
      </Container>
    </Container>

    // <section className="landing">
    //   <MyCarousel />
    //   <div className="dark-overlay">
    //     <div className="landing-inner">
    //       <h1 className="x-large">Take Me Home</h1>
    //       <p className="lead">
    //         Create a user profile, setup your reference, search for your love
    //         ones, and find the "purfect-match"!
    //       </p>
    //       <div className="buttons">
    //         <Link to="/register" className="btn btn-primary">
    //           Sign Up
    //         </Link>
    //         <Link to="/login" className="btn btn-light">
    //           Login
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Landing;
