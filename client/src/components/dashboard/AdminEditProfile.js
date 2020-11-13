import React, {Fragment, useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Form, Col, Row, Button} from "react-bootstrap";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { getCurrentAdminProfile, updateAdminProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const initialState = {
    existing_password: "",
    new_password: "",
    new_password2: "",
};
const AdminEditProfile = ({setAlert, getCurrentAdminProfile, updateAdminProfile, history, auth: {user, loading},}) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (!user) {
            getCurrentAdminProfile();
        }
        if (!loading && user) {
            setFormData(user);
        }
    }, [loading, getCurrentAdminProfile, user]);

    const {
        existing_password,
        new_password,
        new_password2,
    } = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let password_requirements = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        if (new_password && !new_password.match(password_requirements)) {
            setAlert("Invalid Password.", "danger");
            console.log("Invalid Password.");
        } else if (new_password && new_password !== new_password2) {
            setAlert(
                "Passwords don't match!",
                "danger"
            );
            console.log("password doesn't match");
        } else {
            updateAdminProfile(formData, history);
        }
    };

    return user ? (
        <Fragment>
            <Form onSubmit={onSubmit}>
                <h3>Update Password</h3>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Existing Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="password"
                            placeholder="Enter Existing Password"
                            name="existing_password"
                            value={existing_password}
                            onChange={onChange}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        New Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="password"
                            placeholder="New Password"
                            name="new_password"
                            value={new_password}
                            onChange={onChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Confirm Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="password"
                            placeholder="Confirm New Password"
                            name="new_password2"
                            value={new_password2}
                            onChange={onChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{span: 10, offset: 2}}>
                        <Button type="submit">Update Profile</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Fragment>
    ) : (
        <Spinner/>
    );
};

AdminEditProfile.propTypes = {
    setAlert: PropTypes.func.isRequired,
    getCurrentAdminProfile: PropTypes.func.isRequired,
    updateAdminProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {setAlert, getCurrentAdminProfile, updateAdminProfile})(
    withRouter(AdminEditProfile)
);