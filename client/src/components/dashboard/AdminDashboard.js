import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { loadAdmin } from "../../actions/auth";
import { Button, CardDeck, Jumbotron, Card } from "react-bootstrap";

const AdminDashboard = ({ auth: { user, loading } }) => {
  useEffect(() => {
    loadAdmin(localStorage.getItem("token"));
  }, []);

  return (
    <Fragment>
      {loading && user === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Jumbotron className="mytext-primary mytext-center">
            <h1 className="large">Admin Dashboard</h1>
            <p className="lead">Welcome back, {user ? user.userName : "Admin"}!</p>
          </Jumbotron>
          <CardDeck>
            <Card className="text-center">
              <Card.Body>
                <Card.Text>
                  <i className="fas fa-folder-plus fa-5x"></i>
                </Card.Text>
                <Button href="/create-pet-profile">
                  Add New Pet
                </Button>
              </Card.Body>
            </Card>

            <Card className="text-center">
              <Card.Body>
                <Card.Text>
                  <i className="fas fa-folder-open fa-5x"></i>
                </Card.Text>
                <Button href="/managepets">Manage Pets</Button>
              </Card.Body>
            </Card>

            <Card className="text-center">
              <Card.Body>
                <Card.Text>
                  <i className="fas fa-user-edit fa-5x"></i>
                </Card.Text>
                <Button href="/admineditprofile">
                  Profile Settings
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Fragment>
      )}
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
