import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { getCurrentUserProfile, updateUserProfile} from "../../actions/profile";
import Spinner from "../layout/Spinner";

const initialState = {
    existing_password: "",
    new_password: "",
    new_password2: "",
    introduction: "",
};

const UserEditProfile = ({ getCurrentUserProfile, updateUserProfile, history, auth: { user, loading }, }) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (!user) {
            getCurrentUserProfile();
        }
        if (!loading && user) {
            setFormData(user);
        }
    }, [loading, getCurrentUserProfile, user]);

    const {
        existing_password,
        new_password,
        new_password2,
        introduction,
    } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let password_requirements = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        if (existing_password !== user.password) {
            setAlert("Unauthorized operation: existing password does not match our record", "danger");
            console.log("Unauthorized operation.");
        }else if (new_password && !new_password.match(password_requirements)) {
            setAlert("Invalid Password.", "danger");
            console.log("Invalid Password.");
        }
        else if (new_password && new_password !== new_password2) {
            setAlert(
                "Passwords don't match or invalid verification code!",
                "danger"
            );
            console.log("password doesn't match");
        }else{
            updateUserProfile(formData, history);
            console.log("SUCCESS!");
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

                <h3>Update Introduction</h3>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Introduction
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="Introduction"
                                placeholder="New Introduction"
                                as="textarea"
                                rows={5}
                                name="introduction"
                                value={introduction}
                                onChange={onChange}
                            />
                        </Col>
                    </Form.Group>
                </fieldset>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Update Profile</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Fragment>
    ) : (
        <Spinner />
    );
};

UserEditProfile.propTypes = {
    setAlert: PropTypes.func.isRequired,
    getCurrentUserProfile: PropTypes.func.isRequired,
    updateUserProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { setAlert, getCurrentUserProfile, updateUserProfile })(
    withRouter(UserEditProfile)
);