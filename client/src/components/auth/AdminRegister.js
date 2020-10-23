import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { adminRegister } from "../../actions/auth";
import PropTypes from "prop-types";
import { applyMiddleware } from "redux";

const AdminRegister = ({ setAlert, adminregister, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    admin_name: "",
    email: "",
    password: "",
    password2: "",
    code: "",
  });

  const { admin_name, email, password, password2, code } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // Validate admin_name patten
    var admin_name_requirements = /^[0-9a-zA-Z]+$/;
    // Validate password patten
    var password_requirements = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    if (!admin_name.match(admin_name_requirements)) {
      setAlert("Invalid username.", "danger");
      console.log("Invalid username.");
    }
    else if (!password.match(password_requirements)) {
      setAlert("Invalid Password.", "danger");
      console.log("Invalid Password.");
    }
    else if (password !== password2 || code !== "admin") {
      setAlert(
        "Passwords don't match or invalid verification code!",
        "danger"
      );
      console.log("password doesn't match");
    } else {
      adminregister({ admin_name, email, password });
      console.log("SUCCESS!");
    }
  };

  // Redirect if is authenticated
  if(isAuthenticated) {
      return <Redirect to="/admindashboard" />
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Admin Account{" "}
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="admin_name"
            value={admin_name}
            onChange={onChange}
            required
          />
        </div>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Verification Code"
            name="code"
            value={code}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value="Register As Admin"
        />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

AdminRegister.propType = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, adminregister: adminRegister })(
  AdminRegister
);
