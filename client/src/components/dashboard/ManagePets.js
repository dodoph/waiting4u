import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAdminPetProfiles } from "../../actions/profile";
import { Table, Container } from "react-bootstrap";
import PetList from "./PetList";

const ManagePets = ({
  getAdminPetProfiles,
  petProfile: { adminsPetProfiles, loading },
}) => {
  useEffect(() => {
    getAdminPetProfiles();
  }, []);

  return loading && adminsPetProfiles === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Container>
        <h1 className="large mytext-primary mytext-center">
          Manage Pet Profiles
        </h1>
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
            {adminsPetProfiles.map((pet, index) => {
              return <PetList key={index} {...pet} />;
            })}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

ManagePets.propTypes = {
  getAdminPetProfiles: PropTypes.func.isRequired,
  petProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  petProfile: state.petProfile,
});

export default connect(mapStateToProps, { getAdminPetProfiles })(ManagePets);
