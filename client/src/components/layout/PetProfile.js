import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { getPetProfileViewOnly } from "../../actions/profile";
import { connect } from "react-redux";
import { Button, Jumbotron } from "react-bootstrap";
import img_placeholder from "../../img/dog-solid.svg";
import { withRouter } from "react-router-dom";

const PetProfile = ({
  getPetProfileViewOnly,
  match: { params },
  petProfile: { petProfile },
  history,
}) => {
  useEffect(() => {
    getPetProfileViewOnly(params.id);
  }, []);

  return petProfile ? (
    <Fragment>
      <Jumbotron className="page-header">
        Hello, I am {petProfile.pet_name}!
      </Jumbotron>
      <img
        src={petProfile.image_url ? petProfile.image_url : img_placeholder}
        style={{ maxWidth: "500px" }}
        className="center"
      ></img>
      <div className="pet-profile">
        <div>
          My name is <strong>{petProfile.pet_name}</strong>!
        </div>
        <div>
          My birthday is{" "}
          {new Date(petProfile.date_of_birth).toISOString().split("T")[0]}.
        </div>
        <div>
          I am a {petProfile.type}, {petProfile.breed} breed.{" "}
        </div>
        <div>A little bit about myself: {petProfile.description}</div>
        <div>Availability: {petProfile.availability}</div>
        <div>Dispositions: {petProfile.dispositions}</div>
        <div>Updates: {petProfile.status}</div>
        <div>Nice to meet you!</div>
      </div>
      <Button onClick={() => history.goBack()}>GO BACK</Button>
    </Fragment>
  ) : (
    <Spinner />
  );
};

PetProfile.propTypes = {
  getPetProfileViewOnly: PropTypes.func.isRequired,
  petProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  petProfile: state.petProfile,
});

export default connect(mapStateToProps, { getPetProfileViewOnly })(
  withRouter(PetProfile)
);
