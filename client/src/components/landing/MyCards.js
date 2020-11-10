import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Col, CardColumns } from "react-bootstrap";
import { getAllPetProfiles } from "../../actions/profile";
import PetCard from "../../components/layout/PetCard";
import Spinner from "../layout/Spinner";

const MyCards = ({ getAllPetProfiles, petProfile: { allPetProfiles } }) => {
  useEffect(() => {
    getAllPetProfiles();
  }, []);

  return (
    <Col xs={12} md={9} lg={9}>
      {allPetProfiles ? (
        <CardColumns>
          {allPetProfiles.map((pet, index) => {
            return (
              <div key={index} className="col mb-4">
                <PetCard {...pet} />
              </div>
            );
          })}
        </CardColumns>
      ) : (
        <Spinner />
      )}
    </Col>
  );
};

MyCards.propTypes = {
  getAllPetProfiles: PropTypes.func.isRequired,
  petProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  petProfile: state.petProfile,
});

export default connect(mapStateToProps, { getAllPetProfiles })(MyCards);
