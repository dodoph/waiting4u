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
  );
};

export default Landing;
