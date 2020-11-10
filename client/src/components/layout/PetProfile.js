import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { getPetProfileViewOnly } from "../../actions/profile";
import { connect } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      <h2>Hello, happy to meet you! I am {petProfile.pet_name}!</h2>
      <Container>
        <img src={petProfile.image_url ? petProfile.image_url : img_placeholder}></img>
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
        <div> A little bit about myself: {petProfile.description}.</div>
        <div>Availability: {petProfile.availability}</div>
        <div>Dispositions: {petProfile.dispositions}</div>
        <Button onClick={() => history.goBack()}>GO BACK</Button>
      </Container>
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

export default connect(mapStateToProps, { getPetProfileViewOnly })(withRouter(PetProfile));
