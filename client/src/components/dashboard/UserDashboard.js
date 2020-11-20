import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { loadUser } from "../../actions/auth";
import { Button, Jumbotron, CardDeck, Card } from "react-bootstrap";

const UserDashboard = ({ auth: { user, loading } }) => {
  useEffect(() => {
    loadUser(localStorage.getItem("token"));
  }, []);

  return (
    <Fragment>
      {loading && user === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Jumbotron className="mytext-primary mytext-center">
            <h1 className="large">User Dashboard</h1>
            <p className="lead">
              Welcome back, {user ? user.user_name : "Dear Member"}!
            </p>
          </Jumbotron>
          <CardDeck>
            <Card className="text-center">
              <Card.Body>
                <Card.Text>
                  <i className="fas fa-crown fa-5x"></i>
                </Card.Text>
                <Button href="/likedpets">Liked Pets</Button>
              </Card.Body>
            </Card>

            <Card className="text-center">
              <Card.Body>
                <Card.Text>
                  <i className="fas fa-user-edit fa-5x"></i>
                </Card.Text>
                <Button href="/usereditprofile">View/Update Profile</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Fragment>
      )}
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
