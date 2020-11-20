import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { getRecentUpdates } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const MyCarousel = ({
    getRecentUpdates,
    petProfile: { petUpdateProfiles },
}) => {
    useEffect(() => {
        if(!petUpdateProfiles) {
            getRecentUpdates();
        }
    }, [petUpdateProfiles]);
  return (
    <Carousel>
        {petUpdateProfiles ? (petUpdateProfiles.map((pet, index) =>{
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
    getRecentUpdates: PropTypes.func.isRequired,
    petProfile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    petProfile: state.petProfile,
});

export default connect(mapStateToProps, { getRecentUpdates })(MyCarousel);
