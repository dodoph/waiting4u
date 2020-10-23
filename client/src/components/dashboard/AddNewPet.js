import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Form, Col, Row, Button, Container } from "react-bootstrap";

export const AddNewPet = () => {
  return (
    <Fragment>
      <h2>Create a New Pet Profile</h2>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="name" placeholder="Name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalimage_url">
          <Form.Label column sm={2}>
            Image
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Image URL" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalbirthday">
          <Form.Label column sm={2}>
            Birthday
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="date" placeholder="birthday" />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} controlId="formHorizontaltype">
            <Form.Label column sm={2}>
              Type
            </Form.Label>
            <Col sm={10}>
              <Form.Check type="radio" label="Dog" name="type" defaultChecked />
              <Form.Check type="radio" label="Cat" name="type" />
              <Form.Check type="radio" label="Others" name="type" />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} controlId="formHorizontalbreed">
          <Form.Label column sm={2}>
            Breed
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="select">
              {[
                "Retrievers",
                "German Shepherd",
                "French Bulldogs",
                "Poodles",
                "Beagles",
                "Pointers",
                "Dachshunds",
                "Yorkshire Terriers",
                "Other",
              ].map((breed) => (
                <option>{breed}</option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalavailability">
          <Form.Label column sm={2}>
            Availability
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Available"
              name="availability"
              defaultChecked
            />
            <Form.Check type="radio" label="Pending" name="availability" />
            <Form.Check
              type="radio"
              label="Not Available"
              name="availability"
            />
            <Form.Check type="radio" label="Adopted" name="availability" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalstatus">
          <Form.Label column sm={2}>
            Status
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="True"
              name="status"
              defaultChecked
            />
            <Form.Check type="radio" label="False" name="status" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontaldescriptions">
          <Form.Label column sm={2}>
            Despositions
          </Form.Label>
          <Col sm={10}>
            <Form.Check type="checkbox" label="Good with other animals" />
            <Form.Check type="checkbox" label="Good with children" />
            <Form.Check
              type="checkbox"
              label="Animal must be leashed at all times"
            />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} controlId="formHorizontaldescription">
            <Form.Label column sm={2}>
              Description
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="description"
                placeholder="Description"
                as="textarea"
                rows={5}
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} controlId="formHorizontaladmin">
          <Form.Label column sm={2}>
            Admin
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Disabled => Default admin id"
              disabled
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Create Profile</Button>
          </Col>
        </Form.Group>
      </Form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPet);
