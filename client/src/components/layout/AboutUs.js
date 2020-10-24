import React from "react";
import logo from "../../../src/img/take-me-home-logo.jpg";

export const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="dark-overlay">
        <div className="about-us-inner">
          <h1 className="lead mytext-center">About “Waiting4U”</h1>
          <img src={logo} className="center" />
          <div className="container">
            <p>
              What better way to match future pet owners up with available
              animals than a swipe-ready dating app! Our team, the “Waiting4U”,
              will create a platform for the candidates that are looking for
              their perfect pet-match. We will simulate the popular dating
              experience, the only difference is that candidates are trying to
              find their perfect four-legged friends, who provide best
              companions and 100% loyal to them. <br></br>
              <br></br>
              Contact us: <br></br>
              Email: generaladmin@waiting4u.com <br></br>
              Phone: 123-456-7890
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
