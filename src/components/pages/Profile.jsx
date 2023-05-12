import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';

const measurement = {
    height: "200px",
    width: "200px",
    border: "none"
}

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='container my-5'>
            <div className='row'>
                <h2 className='text-center mb-4 text-primary'>My Profile</h2>
                <p className='mb-4 fs-2'>Name: {user?.displayName}</p>
                <p className='mb-4 fs-2'>Email: {user?.email}</p>
                <img style={measurement} src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Profile;