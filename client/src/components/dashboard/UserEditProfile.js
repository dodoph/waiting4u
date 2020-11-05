import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { updateUserProfile} from "../../actions/profile";

const initialState = {
    new_password: "",
    new_password2: "",
    new_introduction: "",
};

export const UserEditProfile = ({ updateUserProfile, history }) => {
    const [formData, setFormData] = useState(initialState);

    const {
        new_password,
        new_password2,
        new_introduction,
    } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        var password_requirements = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        if (new_password && !new_password.match(password_requirements)) {
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

    return (
        <Fragment>
            <Form onSubmit={onSubmit}>
                <h3>Update Password</h3>
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
                                name="new_introduction"
                                value={new_introduction}
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
    );
};

UserEditProfile.propTypes = {
    updateUserProfile: PropTypes.func.isRequired,
    //userProfile: PropTypes.object.isRequired,
};

export default connect(null, { updateUserProfile })(
    withRouter(UserEditProfile)
);