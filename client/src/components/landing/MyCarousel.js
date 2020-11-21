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
        if(!petUpdateProfiles) {
            getRecentStatusUpdate();
        }
    }, [petUpdateProfiles]);
  return (
    <Carousel>
        {petUpdateProfiles ? (petUpdateProfiles.map((pet) =>{
            return (
                <Carousel.Item>
                    <img className="myCarousel-item" src={pet.image_url} alt="slide" />
                    <Carousel.Caption>
                        <h3>{pet.pet_name}</h3>
                        <p>{pet.status}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        })) : (<Spinner />)}
    </Carousel>
  );
};

MyCarousel.propTypes = {
    getRecentStatusUpdate: PropTypes.func.isRequired,
    petProfile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    petProfile: state.petProfile,
});

export default connect(mapStateToProps, { getRecentStatusUpdate })(MyCarousel);
