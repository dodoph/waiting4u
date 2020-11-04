import React from 'react'

const EditPetProfile = ({ match: { params } }) => {
    return (
        <div>
            edit pet id: {params.id}
        </div>
    )
}

export default EditPetProfile;