import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getCurrentAdminProfile } from "../../actions/profile";
import { Table, Button, Container } from "react-bootstrap";

const ManagePets = ({
  getCurrentProfile,
  auth,
  adminProfile: { adminProfile, loading },
}) => {
  // useEffect(() => {
  //   getCurrentProfile();
  // }, []);

  return loading && adminProfile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Container >
        <h1 className="large mytext-primary mytext-center">Manage Pet Profiles</h1>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Billy</td>
              <td>Billy is a dog</td>
              <td><Button>Edit</Button></td>
              <td><Button>Delete</Button></td>
            </tr>            <tr>
              <td>Kitty</td>
              <td>Kitty is a Cat</td>
              <td><Button>Edit</Button></td>
              <td><Button>Delete</Button></td>
            </tr>
            <tr>
              <td>Mango</td>
              <td>Mango is a turtle</td>
              <td><Button>Edit</Button></td>
              <td><Button>Delete</Button></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

ManagePets.propTypes = {
  getCurrentAdminProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  adminProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  adminProfile: state.adminProfile,
});

export default connect(mapStateToProps, { getCurrentAdminProfile })(ManagePets);
