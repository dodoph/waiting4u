import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllPetProfiles } from "../../actions/profile";
import {
  CardDeck,
  Jumbotron,
  Row,
  Form,
  Container,
  Card,
} from "react-bootstrap";
import PetCard from "../layout/PetCard";

const sortedBy = ["Best Match", "Created Date", "Birthday"];

const Pets = ({
  getAllPetProfiles,
  petProfile: { allPetProfiles, loading },
}) => {
  useEffect(() => {
    getAllPetProfiles();
  }, []);

  return (
    <Fragment>
      <Jumbotron>
        <h1 className="large mytext-primary mytext-center">View All Pets</h1>
        <p className="mytext-center">
          Click the more info button to view a complete profile.
        </p>
      </Jumbotron>

      <Container style={{ margin:"auto", marginBottom:"1rem", padding:"unset" }}>
        <Form inline style={{ float:"right" }}>
          <Form.Label style={{ marginRight:"10px" }}>Sorted By:</Form.Label>
          <Form.Group>
            <Form.Control
              as="select"
              name="sorted_by"
              value={sortedBy}
              // onChange={onChange}
            >
              {sortedBy.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
      {loading && allPetProfiles === null ? (
        <Spinner />
      ) : (
        <Fragment>
          {allPetProfiles.length > 0 ? (
            <CardDeck className="d-flex justify-content-center">
              {allPetProfiles.map((pet, index) => {
                return (
                  <div key={index} className="mb-4">
                    <PetCard style={{ width: "18rem" }} {...pet} />
                  </div>
                );
              })}
            </CardDeck>
          ) : (
            <div>
              Sorry we do not have any available pets at this moment, please
              check back later.
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

Pets.propTypes = {
  getAllPetProfiles: PropTypes.func.isRequired,
  petProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  petProfile: state.petProfile,
});

export default connect(mapStateToProps, { getAllPetProfiles })(Pets);
