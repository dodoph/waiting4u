import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllPetProfiles } from "../../actions/profile";
import { Container, CardDeck } from "react-bootstrap";
import PetCard from "../layout/PetCard";

const Pets = ({
  getAllPetProfiles,
  petProfile: { allPetProfiles, loading },
}) => {
  useEffect(() => {
    getAllPetProfiles();
  }, []);

  return loading && allPetProfiles === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Container>
        <h1 className="large mytext-primary mytext-center">View All Pets</h1>
      </Container>

      <CardDeck className="d-flex justify-content-center">
        {allPetProfiles.map((pet, index) => {
          return (
            <div key={index} className="mb-4">
              <PetCard style={{ width: "18rem" }} {...pet} />
            </div>
          );
        })}
      </CardDeck>
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
