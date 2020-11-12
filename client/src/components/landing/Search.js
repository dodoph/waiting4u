import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CheckBox from "../dashboard/CheckBox";
import { getAllPetsProfilesBySearch } from "../../actions/profile";

const initialState = {
  type: "All",
  breed: "All",
  dispositions: [],
};

const initialDispositions = {
  dispositionOptions: [
    { id: 1, value: "Good with other animals", isChecked: false },
    { id: 2, value: "Good with children", isChecked: false },
    { id: 3, value: "Animal must be leashed at all times", isChecked: false },
  ],
};

const types = ["All", "Dog", "Cat", "Other"];
const dogBreeds = [
  "All",
  "Retrievers",
  "German Shepherd",
  "French Bulldogs",
  "Poodles",
  "Beagles",
  "Pointers",
  "Dachshunds",
  "Yorkshire Terriers",
  "Other",
];
const catBreeds = [
  "All",
  "Abyssinian",
  "American Shorthair",
  "Birman",
  "Maine Coon",
  "Oriental",
  "Persian",
  "Ragdoll",
  "Siamese",
  "Other",
];
const otherBreeds = ["Other"];

export const Search = ({ getAllPetsProfilesBySearch }) => {
  const [formData, setFormData] = useState(initialState);
  const [dispositionData, setDispositionData] = useState(initialDispositions);
  const { type, breed } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let dispositions = [];
    let dispositionOptions = dispositionData.dispositionOptions;
    dispositionOptions.forEach((disposition) => {
      if (disposition.isChecked) {
        dispositions.push(disposition.value);
      }
    });
    const updatedFormData = { ...formData, dispositions: dispositions };
    console.log(updatedFormData);
    setFormData(updatedFormData);
    getAllPetsProfilesBySearch(updatedFormData);
  };

  const handleCheckElement = (event) => {
    let dispositionOptions = dispositionData.dispositionOptions;
    dispositionOptions.forEach((disposition) => {
      if (disposition.value === event.target.value) {
        disposition.isChecked = event.target.checked;
      }
    });
    setDispositionData({ dispositionOptions: dispositionOptions });
  };

  return (
    <Col xs={12} md={3} lg={3}>
      <Form onSubmit={onSubmit}>
        <Row className="lead mytext-primary">Search by:</Row>

        <Form.Label as={Row}>Type:</Form.Label>
        <Form.Group as={Row}>
          <Form.Control
            as="select"
            name="type"
            value={type}
            onChange={onChange}
          >
            {types.map((type, index) => (
              <option key={index}>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Label as={Row}>Breed:</Form.Label>
        <Form.Group as={Row}>
          {type === "All" && (
            <Form.Control
              as="select"
              name="breed"
              value={breed}
              onChange={onChange}
            >
              <option>All</option>
            </Form.Control>
          )}
          {type === "Dog" && (
            <Form.Control
              as="select"
              name="breed"
              value={breed}
              onChange={onChange}
            >
              {dogBreeds.map((breed, index) => (
                <option key={index}>{breed}</option>
              ))}
            </Form.Control>
          )}
          {type === "Cat" && (
            <Form.Control
              as="select"
              name="breed"
              value={breed}
              onChange={onChange}
            >
              {catBreeds.map((breed, index) => (
                <option key={index}>{breed}</option>
              ))}
            </Form.Control>
          )}
          {type === "Other" && (
            <Form.Control
              as="select"
              name="breed"
              value={breed}
              onChange={onChange}
            >
              {otherBreeds.map((breed, index) => (
                <option key={index}>{breed}</option>
              ))}
            </Form.Control>
          )}
        </Form.Group>

        <Form.Label as={Row}>Despositions:</Form.Label>
        <Form.Group as={Row}>
          {dispositionData.dispositionOptions.map((disposition, id) => {
            return (
              <CheckBox
                key={id}
                handleCheckElement={handleCheckElement}
                {...disposition}
              />
            );
          })}
        </Form.Group>

        <Row>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Search</Button>
            </Col>
          </Form.Group>
        </Row>
      </Form>
    </Col>
  );
};

Search.propTypes = {
  getAllPetsProfilesBySearch: PropTypes.func.isRequired,
};

export default connect(null, { getAllPetsProfilesBySearch })(Search);
