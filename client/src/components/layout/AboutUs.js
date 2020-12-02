import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Col, Form, Jumbotron, Row } from "react-bootstrap";
import { submitContactRequest } from "../../actions/profile";
import PropTypes from "prop-types";

import logo from "../../../src/img/take-me-home-logo.jpg";

const initialState = {
  name: "",
  email: "",
  petName: "",
  message: "",
};

export const AboutUs = ({ submitContactRequest, history }) => {
  const [formData, setFormData] = useState({...initialState});
  const [displayContactForm, toggleContactForm] = useState(false);

  const onClick = (e) => {
    if (displayContactForm) {
      setFormData({ ...initialState });
    }
    toggleContactForm(!displayContactForm);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitContactRequest(formData, history);
  }
  return (
    <Fragment>

      <Jumbotron>
        <h1 className="page-header">About “Waiting4U”</h1>
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
      </div>

      <div className="contact-button" >
        <Button onClick={onClick}> Click here to contact us </Button>
      </div>

        {displayContactForm && (
          <Form onSubmit={onSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="name"
                placeholder="Name"
                name="name"
                onChange={onChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Email:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Message:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Please let us know how we can help to find you a purfect match! "
                name="message"
                onChange={onChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Pet Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="name"
                placeholder="Optional: what's the name for the pet that you are looking for?"
                name="petName"
                onChange={onChange}
              />
            </Col>
          </Form.Group>


          <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
        </Form>
        )}

    </Fragment>
  );
};

AboutUs.propTypes = {
  submitContactRequest: PropTypes.func.isRequired,
};

export default connect(null, { submitContactRequest })( withRouter(AboutUs) );
