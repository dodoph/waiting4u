import React from "react";
import { Card, Button } from "react-bootstrap";
import img_placeholder from "../../img/dog-solid.svg";
import { Link } from "react-router-dom";

export const PetCard = (props) => {
  return (
    <Card style={{ width: "18rem" }} key={props.index} className="box">
      <Card.Title>{props.pet_name}</Card.Title>
      {props.image_url ? (
        <Card.Img variant="top" src={props.image_url} />
      ) : (
        <Card.Img variant="top" src={img_placeholder} />
      )}
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>Date of Birth: {new Date(props.date_of_birth).toISOString().split("T")[0]}</Card.Text>
        <Card.Text>{props.availability}</Card.Text>
      </Card.Body>
      <Link to={`/pets/${props.pet_id}`}><Button>More Info</Button></Link>
    </Card>
  );
};

// Carousel.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { logout })(Carousel);
export default PetCard;
