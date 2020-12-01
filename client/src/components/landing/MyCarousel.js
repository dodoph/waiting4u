import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { getRecentStatusUpdate } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const MyCarousel = ({
  getRecentStatusUpdate,
  petProfile: { petUpdateProfiles },
}) => {
  useEffect(() => {
    if (!petUpdateProfiles) {
      getRecentStatusUpdate();
    }
  }, [petUpdateProfiles]);
  return (
    <Carousel>
      {petUpdateProfiles ? (
        petUpdateProfiles.map((pet, index) => {
          return (
            <Carousel.Item key={index}>
              {pet.image_url ? (
                <img
                  src={pet.image_url}
                  alt={pet.pet_name}
                  className="myCarousel-item"
                /> 
              ) : (
                <div className="myCarousel-pet-icon-div">
                  <i className="fas fa-dog fa-8x pet-icon"></i>
                </div>
              )}
              <Carousel.Caption>
                <div className="myCarousel-caption">
                 <h3>{pet.pet_name}</h3>
                <p>{pet.status}</p>                   
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
      ) : (
        <Spinner />
      )}
    </Carousel>
  );
};

MyCarousel.propTypes = {
  getRecentStatusUpdate: PropTypes.func.isRequired,
  petProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  petProfile: state.petProfile,
});

export default connect(mapStateToProps, { getRecentStatusUpdate })(MyCarousel);
