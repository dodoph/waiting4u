import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllPetProfiles } from "../../actions/profile";
import { Container, CardColumns } from "react-bootstrap";
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

          <CardColumns> 
            {allPetProfiles.map((pet, index) => {
              return <PetCard key={index} {...pet} />;
            })}
          </CardColumns>

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
