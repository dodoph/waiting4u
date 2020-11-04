import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export const MyNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const adminAuthLinks = (
    <Nav className="ml-auto">
      <NavDropdown title="Hi, Admin " id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/admindashboard">Dashboard</NavDropdown.Item>
        <NavDropdown.Item href="/pets">All Pets</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link onClick={logout} href="#">
        <i className="fas fa-sign-out-alt"></i> Logout
      </Nav.Link>
    </Nav>
  );

  const guestLinks = (
    <Nav className="ml-auto">
      <Nav.Link href="/aboutus">About us</Nav.Link>
      <Nav.Link href="/pets">Pets</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  );

  return (
    <Navbar fixed="top" className="myNavbar bg-dark">
        <h2>
          <Link to="/">
            <i className="fas fa-paw"></i> Waiting4U
          </Link>
        </h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated ? adminAuthLinks : guestLinks}
        </Navbar.Collapse>
    </Navbar>
  );
};

MyNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(MyNavbar);
