import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import {loadUser} from "../../actions/auth";
import { Button, Container, Row, Col } from "react-bootstrap";

const UserDashboard = ({
  auth: { user, loading },
}) => {
  useEffect(() => {
      loadUser(localStorage.getItem("token"));
  }, []);

  return loading && user === null ? (
    <Spinner />
  ) : (
      <Fragment>
        <Container >
          <h1 className="large mytext-primary mytext-center">User Dashboard</h1>
        </Container>
        <Container>
          <Row >
            <Col>
              <Button href="/usereditprofile">View/Update Profile</Button>
            </Col>
          </Row>
        </Container>
      </Fragment>
  );
};

UserDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(UserDashboard);
