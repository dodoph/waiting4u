import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { getPetProfileViewOnly } from "../../actions/profile";
import { connect } from "react-redux";
import { Button, Jumbotron, Row, Col } from "react-bootstrap";
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
  }, [params.id]);

  const dispositions_values = petProfile && petProfile.dispositions.length > 0 ? petProfile.dispositions.join("\n") : "N/A";
  const status_values = petProfile && petProfile.status.length > 0 ? petProfile.status.join("\n") : "N/A";

  return petProfile ? (
    <Fragment>
      <Jumbotron className="page-header">
        Hello, I am {petProfile.pet_name}!
      </Jumbotron>

      <Row>
        <Col lg={6} >
          {petProfile.image_url ? (
            <img
              src={petProfile.image_url}
              style={{ maxWidth: "500px",  width: "100%" }}
              className="center"
            ></img>
          ) : (
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <i className="fas fa-dog fa-7x"></i>
            </div>
          )}
        </Col>

        <Col style={{ justifyContent: "end" }}>
          <div className="pet-profile">
            <div>
              My name is <strong>{petProfile.pet_name}</strong>! Nice to meet you!
            </div>
            <div>
              My birthday is{" "}
              {new Date(petProfile.date_of_birth).toISOString().split("T")[0]}.
            </div>
            <div>
              I am a {petProfile.type}, {petProfile.breed} breed.
            </div>
            <div>A little bit about myself: {petProfile.description}</div>
            <div>Availability: {petProfile.availability}</div>
            <div>Dispositions: {dispositions_values}</div>
            <div>Updates: {status_values}</div>
          </div>
        </Col>
      </Row>

      <Button onClick={() => history.goBack()} style={{ marginTop: "20px", float: "right" }}>GO BACK</Button>
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
