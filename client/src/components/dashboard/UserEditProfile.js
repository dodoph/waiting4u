import React, { Component } from 'react'
import { connect } from 'react-redux'

export const UserEditProfile = () => {
    return (
        <div>
            Edit User Profile
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditProfile)
