import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export const MyNavbar = ({
  auth: { role, isAuthenticated, loading, user },
  logout,
}) => {
  const adminAuthLinks = (
    <Nav className="ml-auto">
      <NavDropdown title="Hi, Admin " id="responsive-nav-dropdown">
        <NavDropdown.Item href="/admineditprofile">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/admindashboard">Dashboard</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link onClick={logout} href="#">
        <i className="fas fa-sign-out-alt"></i> Logout
      </Nav.Link>
    </Nav>
  );

  const userAuthLinks = (
    <Nav className="ml-auto">
      <NavDropdown title="Hi, User" id="responsive-nav-dropdown">
        <NavDropdown.Item href="#">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link onClick={logout} href="#">
        <i className="fas fa-sign-out-alt"></i> Logout
      </Nav.Link>
    </Nav>
  );

  const guestLinks = (
    <Nav className="ml-auto">
      <Nav.Link href="/register"><i className="fas fa-user-plus"></i> Register</Nav.Link>
      <Nav.Link href="/login"><i className="fas fa-user"></i> Login</Nav.Link>
    </Nav>
  );

  return (
    <Navbar fixed="top" expand="md" bg="dark" className="myNavbar">
      <h2>
        <Link to="/">
          <i className="fas fa-paw"></i> Waiting4U
        </Link>
      </h2>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/pets">Pets</Nav.Link>
          <Nav.Link href="/aboutus">About us</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {isAuthenticated
            ? role === "admin"
              ? adminAuthLinks
              : userAuthLinks
            : guestLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

MyNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(MyNavbar);
