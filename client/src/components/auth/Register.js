import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
    password2: "",
    introduction: "",
  });

  const { user_name, email, password, password2, introduction } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // Validate user_name patten
    var user_name_requirements = /^[A-Za-z][0-9a-zA-Z]+$/;
    // Validate password patten
    var password_requirements = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    if (!user_name.match(user_name_requirements)) {
      setAlert("Invalid username.", "danger");
      console.log("Invalid username.");
    }
    else if (!password.match(password_requirements)) {
      setAlert("Invalid Password.", "danger");
      console.log("Invalid Password.");
    }
    else if (password)
      if (password !== password2) {
        setAlert("Passwords don't match", "danger");
        console.log("Password doesn't match");
      } else {
        register({ user_name, email, password, introduction });
        console.log("SUCCESS!");
      }
  };

  // Redirect if is authenticated
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large mytext-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user-plus" /> Create Your Account{" "}
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="user_name"
            value={user_name}
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
          <small>
            Passward must between 8 to 16 characters long, contain at least one
            lower case letter, one upper case letter, and one digit.
          </small>
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
          <Form.Control
              type="Introduction"
              placeholder="Introduction about yourself (optional)"
              as="textarea"
              rows={5}
              name="introduction"
              value={introduction}
              onChange={onChange}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propType = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register: register })(Register);
