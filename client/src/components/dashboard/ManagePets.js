import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAdminPetProfiles, deletePetProfile } from "../../actions/profile";
import {
  Table,
  Container,
  Button,
  Form,
  Row,
  Col,
  Jumbotron,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const initialState = {
  status: "",
};

const ManagePets = ({
  getAdminPetProfiles,
  deletePetProfile,
  petProfile: { adminsPetProfiles, loading },
}) => {
  useEffect(() => {
    getAdminPetProfiles();
  }, []);

  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // update status
  };

  const pets = adminsPetProfiles
    ? adminsPetProfiles.map((pet) => (
        <tr key={pet.pet_id}>
          <td>{pet.pet_name}</td>
          <td>
            <img src={pet.image_url} style={{ maxWidth: "10rem" }} />
          </td>
          <td>
            <Link to={`/edit-pet-profile/${pet.pet_id}`}>
              <Button>Edit</Button>
            </Link>
          </td>
          <td>
            <Button onClick={() => deletePetProfile(pet.pet_id)}>Delete</Button>
          </td>
          <td>
            <Form as={Row}>
              <Col>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={2}
                  placeholder="Latest status"
                  name="status"
                />
              </Col>
              <Button type="submit" style={{ marginRight: "15px" }}>
                Update
              </Button>
            </Form>
          </td>
        </tr>
      ))
    : null;

  return (
    <Fragment>
      <Jumbotron className="mytext-center">
        <h1 className="large mytext-primary">Manage Pet Profiles</h1>
        <Link to="/create-pet-profile">
          <Button>Add New Pet Profile</Button>
        </Link>
      </Jumbotron>

      {loading && adminsPetProfiles === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Pet Name</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Status Update</th>
              </tr>
            </thead>
            <tbody>{pets}</tbody>
          </Table>
          <Button href="/admindashboard" style={{float:"right"}}>Go Back</Button>
        </Fragment>
      )}
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
