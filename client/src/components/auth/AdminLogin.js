import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { adminLogin } from "../../actions/auth";

const AdminLogin = ({ adminLogin, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    adminLogin(email, password);
  };

// Redirect if logged in
  if(isAuthenticated) {
      return <Redirect to="/admindashboard" />
  }

  return (
    <Fragment>
      <h1 className="large mytext-primary">Administrator Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account{" "}
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Admin Login" />
        <p className="my-1">
          Need to sign in as public user?{" "}
          <Link to="/login">Public User Sign In</Link>
        </p>
      </form>
    </Fragment>
  );
};

AdminLogin.PropType = {
  adminLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { adminLogin })(AdminLogin);
