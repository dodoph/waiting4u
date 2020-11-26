import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const PetCard = (props) => {
  const pet_name =
    props.pet_name.charAt(0).toUpperCase() + props.pet_name.slice(1);

  let isFavoritePet = false;
  if (props.user && props.role === "user" && props.user.favoritePets) {
    props.user.favoritePets.forEach((pet_id) => {
      if (pet_id === props.pet_id) {
        isFavoritePet = true;
      }
    });
  }

  const handleLikeButton = (pet_id) => {
    console.log(pet_id);
    if (props.role && props.role === "user") {
      props.likeAPet(pet_id);
    }
  };

  return (
    <Card style={props.style} key={props.index} className="text-center">
      {props.image_url ? (
        <Card.Img variant="top" src={props.image_url} />
      ) : (
        <div style={{ padding: "2rem", background: "#d3d3d3" }}>
          <i className="fas fa-dog fa-7x" style={{ color: "white" }}></i>
        </div>
      )}
      <div
        className="like-button-div"
        onClick={() => handleLikeButton(props.pet_id)}
      >
        {isFavoritePet ? (
          <i className="fas fa-heart fa-2x liked-button-icon"></i>
        ) : (
          <i className="fas fa-heart fa-2x like-button-icon"></i>
        )}
      </div>
      <Card.Body>
        <Card.Title className="pet-name">{pet_name}</Card.Title>
        <p>
          Birthday: {new Date(props.date_of_birth).toISOString().split("T")[0]}
          <br />
          {props.availability}
        </p>
        <div>
          <Link to={`/pets/${props.pet_id}`}>
            <Button>More Info</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  role: state.auth.role,
});

export default connect(mapStateToProps)(PetCard);
