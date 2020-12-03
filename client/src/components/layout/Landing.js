import React from "react";
import { Container, Row } from "react-bootstrap";
import MyCarousel from "../landing/MyCarousel";
import Search from "../landing/Search";
import MyCards from "../landing/MyCards";

export const Landing = () => {
  return (
    <Container>

      <Row className="myCarousel">
          <MyCarousel />
      </Row>

      <Container>
        <Row>
          <Search />
          <MyCards />
        </Row>
      </Container>
      
    </Container>
  );
};

export default Landing;
