import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import { getPetProfile, updatePetProfile } from "../../actions/profile";
import PropTypes from "prop-types";
import CheckBox from "./CheckBox";
import Spinner from "../layout/Spinner";

const initialState = {
  pet_name: "",
  image_url: "",
  date_of_birth: "",
  type: "dog",
  breed: "Retrievers",
  availability: "available",
  status: "",
  dispositions: [],
  description: "",
};

const initialDispositions = {
  dispositionOptions: [
    { id: 1, value: "Good with other animals", isChecked: false },
    { id: 2, value: "Good with children", isChecked: false },
    { id: 3, value: "Animal must be leashed at all times", isChecked: false },
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

const EditPetProfile = ({
  getPetProfile,
  updatePetProfile,
  history,
  match: { params },
  petProfile: { petProfile, loading },
}) => {
  const [formData, setFormData] = useState(initialState);
  const [dispositionData, setDispositionData] = useState(initialDispositions);

  useEffect(() => {
    if (!petProfile) {
      getPetProfile(params.id);
    }
    if (!loading && petProfile) {
      petProfile.date_of_birth = new Date(petProfile.date_of_birth).toISOString().split("T")[0];
      setFormData(petProfile);
      let dispositions = petProfile.dispositions;
      let dispositionOptions = initialDispositions.dispositionOptions;
      dispositions.forEach((disposition) => {
        dispositionOptions.forEach((dispositionOption) => {
          if (disposition === dispositionOption.value) {
            dispositionOption.isChecked = true;
          }
        });
      });
    }
  }, [loading, getPetProfile, petProfile, params.id]);

  const {
    pet_name,
    image_url,
    date_of_birth,
    type,
    breed,
    availability,
    status,
    description,
  } = formData;

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
    setFormData(updatedFormData);
    updatePetProfile(updatedFormData, history, params.id);
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

  return petProfile ? (
    <Fragment>
      <h2>Update Pet Profile</h2>
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
              {types.map((type, index) => (
                <option key={index}>{type}</option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Breed
          </Form.Label>
          <Col sm={10}>
            {type === "dog" && (
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
            {type === "cat" && (
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
            {type === "other" && (
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
            {dispositionData.dispositionOptions.map((disposition, id) => {
              return (
                <CheckBox
                  key={id}
                  handleCheckElement={handleCheckElement}
                  {...disposition}
                />
              );
            })}
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
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Update Pet Profile</Button>
          </Col>
        </Form.Group>
      </Form>
    </Fragment>
  ) : (
    <Spinner />
  );
};

EditPetProfile.propTypes = {
  getPetProfile: PropTypes.func.isRequired,
  updatePetProfile: PropTypes.func.isRequired,
  petProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  petProfile: state.petProfile,
});

export default connect(mapStateToProps, { getPetProfile, updatePetProfile })(
  withRouter(EditPetProfile)
);
