import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PetCard = (props) => {
  const pet_name =
    props.pet_name.charAt(0).toUpperCase() + props.pet_name.slice(1);

  return (
    <Card style={props.style} key={props.index} className="text-center">
      {props.image_url ? (
        <Card.Img variant="top" src={props.image_url} />
      ) : (
        <i className="fas fa-dog fa-10x"></i>
      )}
      <Card.Body>
        <Card.Title className="mytext-primary">{pet_name}</Card.Title>
        <p>
          {props.description}
          <br />
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

export default PetCard;
