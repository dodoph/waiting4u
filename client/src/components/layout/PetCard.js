import React from "react";
import { Card, Button } from "react-bootstrap";
import img_placeholder from "../../img/dog-solid.svg";

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
        <Card.Text>{new Date(props.date_of_birth).toLocaleDateString("en-US")}</Card.Text>
        <Card.Text>{props.availability}</Card.Text>
      </Card.Body>
      <Button>More Info</Button>
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
