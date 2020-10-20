import React from "react";
import { Link } from "react-router-dom";
import MyCarousel from "../landing/MyCarousel";

export const Landing = () => {
  return (
    <div className="container">
      <div className="myCarousel">
        <MyCarousel />
      </div>
    </div>

    // <section className="landing">
    //   <MyCarousel />
    //   <div className="dark-overlay">
    //     <div className="landing-inner">
    //       <h1 className="x-large">Take Me Home</h1>
    //       <p className="lead">
    //         Create a user profile, setup your reference, search for your love
    //         ones, and find the "purfect-match"!
    //       </p>
    //       <div className="buttons">
    //         <Link to="/register" className="btn btn-primary">
    //           Sign Up
    //         </Link>
    //         <Link to="/login" className="btn btn-light">
    //           Login
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Landing;
