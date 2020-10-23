import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import { getCurrentAdminProfile } from "../../actions/profile";
import { Button, Container, Row, Col } from "react-bootstrap";

const AdminDashboard = ({
  getCurrentAdminProfile,
  auth: { user },
  adminProfile: { adminProfile, loading },
}) => {
  useEffect(() => {
    getCurrentAdminProfile();
  }, []);

  return loading && adminProfile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Container >
        <h1 className="large mytext-primary mytext-center">Admin Dashboard</h1>
      </Container>
      <Container>
        <Row >
          <Col>
            <Button href="#!">Create New Pet Profile</Button>
          </Col>
          <Col>
            <Button href="/managepets">Manage Pet Profiles</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

AdminDashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  adminProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  adminProfile: state.adminProfile,
});

export default connect(mapStateToProps, { getCurrentAdminProfile })(AdminDashboard);
