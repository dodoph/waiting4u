import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Col, Row, Form, Button } from "react-bootstrap";

export const Search = () => {
  return (
    <Col xs={12} md={3} lg={3}>
    <Form>
        <Row>Search by</Row>
        <Row>
          <Form.Control as="select">
            <option>Type</option>
            <option>Breed</option>
            <option>Desposition</option>
          </Form.Control>
        </Row>
        <Row><Form.Control placeholder="input text"></Form.Control></Row>
        <Row><Button>Submit</Button></Row>
    </Form>
  </Col>
  );
};

// Carousel.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { logout })(Carousel);
export default Search;
