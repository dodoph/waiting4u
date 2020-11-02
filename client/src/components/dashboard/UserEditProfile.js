import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button, Col, Row} from "react-bootstrap";

export const UserEditProfile = () => {
    return (
        <div>
            Update Profile
            Manage Preference
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditProfile)
