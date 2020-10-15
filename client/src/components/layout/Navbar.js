import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { NavDropdown } from "react-bootstrap";

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const adminAuthLinks = (
    <ul>
      <li>
        <NavDropdown title="Hi, Admin " id="basic-nav-dropdown">
          <NavDropdown.Item href="#!">Profile</NavDropdown.Item>
          <NavDropdown.Item href="/admindashboard">Dashboard</NavDropdown.Item>
        </NavDropdown>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/aboutus">About us</Link>
      </li>
      <li>
        <Link to="#!">Pets</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-paw"></i> Waiting4U
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? adminAuthLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
