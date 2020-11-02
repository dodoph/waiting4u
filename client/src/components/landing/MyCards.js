import React from "react";
import { Col, Card, CardGroup, Button } from "react-bootstrap";
import img1 from "../../img/carousels-img1.jpg";
import img2 from "../../img/carousels-img2.jpg";
import img3 from "../../img/carousels-img3.jpg";

export const MyCards = () => {
  return (
    <Col xs={12} md={9} lg={9}>
      <CardGroup>
        <Card>
        <Card.Title>Ham Ham</Card.Title>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Text>
              Ham Ham is looking for a forever lovely home!
            </Card.Text>
            <Card.Text>
                Age: 2 months
            </Card.Text>
          </Card.Body>
          <Button>More Info</Button>
        </Card>
        <Card>
        <Card.Title>GoGo Yellow</Card.Title>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <Card.Text>
                Age: 8 months
            </Card.Text>
          </Card.Body>
          <Button>More Info</Button>
        </Card>
        <Card>
        <Card.Title>Kitty Cat</Card.Title>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Text>
              Kitty Cat likes to play hide-and-seek!
            </Card.Text>
            <Card.Text>
                Age: 1 year and 3 months
            </Card.Text>
          </Card.Body>
          <Button>More Info</Button>
        </Card>
      </CardGroup>
    </Col>
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
export default MyCards;
