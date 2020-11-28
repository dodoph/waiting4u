import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getUserFavoritePets, dislikeAPet } from "../../actions/profile";
import { Table, Button, Jumbotron } from "react-bootstrap";

const ManageFavoritePets = ({
  getUserFavoritePets,
  dislikeAPet,
  petProfile: { userFavoritePetProfiles, loading },
}) => {
  useEffect(() => {
    if (!userFavoritePetProfiles) {
      getUserFavoritePets();
    }
  }, []);

  const handleOnClick = (pet_id) => {
    dislikeAPet(pet_id);
  };

  const pets = userFavoritePetProfiles
    ? userFavoritePetProfiles.map((pet) => (
        <tr key={pet.pet_id}>
          <td>{pet.pet_name}</td>
          <td>
            {pet.image_url ? (
              <img src={pet.image_url} style={{ maxWidth: "10rem" }} alt={pet.pet_name}/>
            ) : (
              <div
                style={{
                  padding: "2rem",
                  background: "#d3d3d3",
                  maxWidth: "150px",
                }}
              >
                <i className="fas fa-dog fa-5x" style={{ color: "white" }}></i>
              </div>
            )}
          </td>
          <td>{pet.availability}</td>
          <td>
            <Button onClick={() => handleOnClick(pet.pet_id)}>Remove</Button>
          </td>
        </tr>
      ))
    : null;

  return (
    <Fragment>
      <Jumbotron className="mytext-center">
        <h1 className="large mytext-primary">My Favorite Pets</h1>
      </Jumbotron>

      {loading && userFavoritePetProfiles === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Pet Name</th>
                <th>Image</th>
                <th>Availability</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>{pets}</tbody>
          </Table>

          <Button href="/dashboard" style={{ float: "right" }}>
            Go Back
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
};

ManageFavoritePets.propTypes = {
  getUserFavoritePets: PropTypes.func.isRequired,
  dislikeAPet: PropTypes.func.isRequired,
  petProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  petProfile: state.petProfile,
});

export default connect(mapStateToProps, {
  getUserFavoritePets, dislikeAPet
})(ManageFavoritePets);
