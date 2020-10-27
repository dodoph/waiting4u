import React, { Fragment, useState, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import { createPetProfile } from "../../actions/profile";
import PropTypes from "prop-types";

const initialState = {
  pet_name: "",
  image_url: "",
  date_of_birth: "",
  type: "",
  breed: "",
  availability: "",
  status: "",
  dispositions: "",
  description: "",
  admin: "",
};

const typeAndBreed = {
  type: [
    { name: "dog", breed: ["brittnary", "german"] },
    { name: "cat", breed: ["maincoon", "pp cat"] },
    { name: "other", breed: ["Other"] },
  ],
};

const types = ["dog", "cat", "other"];
const dogBreeds = [
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

const CreatePetProfile = ({ createPetProfile, history }) => {
  const [formData, setFormData] = useState(initialState);

  const {
    pet_name,
    image_url,
    date_of_birth,
    type,
    breed,
    availability,
    status,
    dispositions,
    description,
    admin,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createPetProfile(formData, history);
  };

  return (
    <Fragment>
      <h2>Create a New Pet Profile</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              placeholder="Name"
              name="pet_name"
              value={pet_name}
              onChange={onChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Image
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Image URL"
              name="image_url"
              value={image_url}
              onChange={onChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Date of Birth
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              placeholder="Date of Birth"
              name="date_of_birth"
              value={date_of_birth}
              onChange={onChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Type
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              name="type"
              value={type}
              onChange={onChange}
            >
              <option>-- Select Pet Type --</option>
              {types.map((type) => (
                <option>{type}</option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Breed
          </Form.Label>
          <Col sm={10}>
            {type == "dog" && (
              <Form.Control
                as="select"
                name="breed"
                value={breed}
                onChange={onChange}
              >
                {dogBreeds.map((breed) => (
                  <option>{breed}</option>
                ))}
              </Form.Control>
            )}
            {type == "cat" && (
              <Form.Control
                as="select"
                name="breed"
                value={breed}
                onChange={onChange}
              >
                {catBreeds.map((breed) => (
                  <option>{breed}</option>
                ))}
              </Form.Control>
            )}
            {type == "other" && (
              <Form.Control
                as="select"
                name="breed"
                value={breed}
                onChange={onChange}
              >
                {otherBreeds.map((breed) => (
                  <option>{breed}</option>
                ))}
              </Form.Control>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Availability
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              name="availability"
              value={availability}
              onChange={onChange}
            >
              <option value="available">Available</option>
              <option value="pending">Pending</option>
              <option value="not-available">Not Available</option>
              <option value="adopted">Adopted</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Status
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Status"
              name="status"
              value={status}
              onChange={onChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Despositions
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              label="Good with other animals"
              name="despositions"
            />
            <Form.Check
              type="checkbox"
              label="Good with children"
              name="despositions"
            />
            <Form.Check
              type="checkbox"
              label="Animal must be leashed at all times"
              name="despositions"
            />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Description
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="description"
                placeholder="Description"
                as="textarea"
                rows={5}
                name="description"
                value={description}
                onChange={onChange}
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Admin
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="admin"
              value={localStorage.getItem("token")}
              disabled
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Create Pet Profile</Button>
          </Col>
        </Form.Group>
      </Form>
    </Fragment>
  );
};

CreatePetProfile.propTypes = {
  createPetProfile: PropTypes.func.isRequired,
};

export default connect(null, { createPetProfile })(
  withRouter(CreatePetProfile)
);
