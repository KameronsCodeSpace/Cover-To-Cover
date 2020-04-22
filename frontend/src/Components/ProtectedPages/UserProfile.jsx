import React from 'react';

import ProtectedNav from '../ProtectedPages/ProtectedNav'

function UserProfile() {
    return (
        <div>
            <ProtectedNav />
            <h1>UserProfile Page</h1>
        </div>
    );
}

export default UserProfile;