import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { loadAdmin } from "../../actions/auth";
import { Button, Container, Row, Col } from "react-bootstrap";

const AdminDashboard = ({
  auth: { user, loading },
}) => {
  useEffect(() => {
    loadAdmin(localStorage.getItem("token"));
  }, []);

  return loading && user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Container >
        <h1 className="large mytext-primary mytext-center">Admin Dashboard</h1>
      </Container>
      <Container>
        <Row >
          <Col>
            <Button href="/create-pet-profile">Create New Pet Profile</Button>
          </Col>
          <Col>
            <Button href="/managepets">Manage Pet Profiles</Button>
          </Col>
          <Col>
            <Button href="/admineditprofile">View/Update Admin Profile</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

AdminDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(AdminDashboard);
