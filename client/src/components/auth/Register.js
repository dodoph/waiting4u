import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '', 
        password2: ''
    });

    const { username, email, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async (e) => {
        e.prevenDefault();
        if (password !== password2) {
            setAlert("password doesn't match", 'danger');
            console.log("password doesn't match");
        } else {
            console.log("SUCCESS!")
            // const newUser = {
            //     username, 
            //     email,
            //     password
            // }

            // try {
            //     const config = {
            //         headers: {'Content-Type': 'Application/json'}
            //     }
            //     const body = JSON.stringify(newUser);
            //     const res = await axios.post('/api/users', body, config);
            //     console.log(res.data);
            // } catch(err) {
            //     console.error(res.response.data);
            // }
        }
    };    

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user" /> Create Your Account </p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
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
                <small className="form-text">
                    This site uses Gravatar so if you want a profile image, use a
                    Gravatar email
                </small>
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
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Fragment>
    );
};

Register.propType = {
    setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register);
