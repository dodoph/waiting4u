import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAdminPetProfiles, deletePetProfile, getPetProfile } from "../../actions/profile";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManagePets = ({
  getAdminPetProfiles,
  deletePetProfile,
  petProfile: { adminsPetProfiles, loading },
}) => {
  useEffect(() => {
    getAdminPetProfiles();
  }, []);

  const pets = adminsPetProfiles ? (adminsPetProfiles.map((pet) => (
    <tr key={pet.pet_id}>
      <td>{pet.pet_name}</td>
      <td>{pet.description}</td>
      <td>
      <Link to={`/edit-pet-profile/${pet.pet_id}`}><Button>Edit</Button></Link>
      </td>
      <td>
        <Button onClick={() => deletePetProfile(pet.pet_id)}>Delete</Button>
      </td>
    </tr>
  ))) : null;

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
            {pets}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

ManagePets.propTypes = {
  getAdminPetProfiles: PropTypes.func.isRequired,
  deletePetProfile: PropTypes.func.isRequired,
  petProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  petProfile: state.petProfile,
});

export default connect(mapStateToProps, {
  getAdminPetProfiles,
  deletePetProfile,
})(ManagePets);
