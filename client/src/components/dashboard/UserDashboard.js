import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import { getCurrentUserProfile } from "../../actions/profile";
import { loadUser } from "../../actions/auth";
import { Button, Container, Row, Col } from "react-bootstrap";

const UserDashboard = ({
  getCurrentUserProfile,
  auth: { user, isAuthenticated, loading },
  // adminProfile: { adminProfile, loading },
}) => {
  useEffect(() => {
    getCurrentUserProfile();
    // loadAdmin(localStorage.getItem("token"));
  }, []);

  return loading && user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Container >
        <h1 className="large mytext-primary mytext-center">User Dashboard</h1>
      </Container>
     </Fragment>
  );
};

UserDashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  userProfile: state.userProfile,
});

export default connect(mapStateToProps, { getCurrentUserProfile })(UserDashboard);
