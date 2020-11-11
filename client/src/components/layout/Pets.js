import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllPetProfiles } from "../../actions/profile";
import { Container, CardDeck, Jumbotron } from "react-bootstrap";
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
      <Jumbotron>
        <h1 className="large mytext-primary mytext-center">View All Pets</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>

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
        <div>Sorry we do not have any available pets at this moment, please check back later.</div>
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
