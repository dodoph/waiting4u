import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllPetProfiles, getAllPetProfilesSortedBy } from "../../actions/profile";
import {
  CardDeck,
  Jumbotron,
  Form,
  Container,
} from "react-bootstrap";
import PetCard from "../layout/PetCard";

const sortedBy = {
  options: [
    {id: 1, value: "Best Match", sort: "date", order: "desc"},
    {id: 2, value: "Age (Ascending)", sort: "age", order: "asc"},
    {id: 3, value: "Age (Descending)", sort: "age", order: "desc"},
    {id: 4, value: "Created Date (Ascending)", sort: "date", order: "asc"},
    {id: 5, value: "Created Date (Descending)", sort: "date", order: "desc"}
  ]
}

const Pets = ({
  getAllPetProfiles,
  getAllPetProfilesSortedBy,
  petProfile: { allPetProfiles, loading },
}) => {
  const [sortedByState, setSortedByState] = useState("Best Match");

  useEffect(() => {
    if (!allPetProfiles) {
      getAllPetProfiles();
    }
  }, [allPetProfiles]);

  const onChange = (event) => {
    sortedBy.options.forEach(option => {
      if (event.target.value === option.value) {
        setSortedByState(option.value);
        getAllPetProfilesSortedBy(option.sort, option.order);
      }
    });
  };

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
              value={sortedByState}
              onChange={onChange}
            >
              {sortedBy.options.map((option, id) => (
                <option key={id}>{option.value}</option>
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
  getAllPetProfilesSortedBy: PropTypes.func.isRequired,
  petProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  petProfile: state.petProfile,
});

export default connect(mapStateToProps, { getAllPetProfiles, getAllPetProfilesSortedBy })(Pets);
