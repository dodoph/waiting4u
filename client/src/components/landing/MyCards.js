import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Col, CardDeck } from "react-bootstrap";
import { getAllPetProfiles, likeAPet } from "../../actions/profile";
import PetCard from "../../components/layout/PetCard";
import Spinner from "../layout/Spinner";
import NoPetFound from "./NoPetFound";

const MyCards = ({
  getAllPetProfiles,
  likeAPet,
  petProfile: { allPetProfiles },
}) => {
  useEffect(() => {
    if (!allPetProfiles) {
      getAllPetProfiles();
    }
    
  }, [allPetProfiles]);

  const noPetFound = allPetProfiles ? allPetProfiles.length === 0 : false;

  return (
    <Col xs={12} md={9} lg={9}>
      {noPetFound ? (
        <NoPetFound />
      ) : allPetProfiles ? (
        <CardDeck className="d-flex justify-content-center">
          {allPetProfiles.map((pet, index) => {
            return (
              <div key={index} className="mb-4">
                <PetCard
                  style={{ width: "13rem" }}
                  likeAPet={likeAPet}
                  {...pet}
                />
              </div>
            );
          })}
        </CardDeck>
      ) : (
        <Spinner />
      )}
    </Col>
  );
};

MyCards.propTypes = {
  getAllPetProfiles: PropTypes.func.isRequired,
  likeAPet: PropTypes.func.isRequired,
  petProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  petProfile: state.petProfile,
});

export default connect(mapStateToProps, { getAllPetProfiles, likeAPet })(
  MyCards
);
