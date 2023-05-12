import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';

const measurement = {
    height: "200px",
    width: "200px",
    border: "none",
    borderRadius: "50%"
}

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='container my-5'>
          {user?  <div className='row'>
                <h2 className='text-center mb-4 text-primary'>My Profile</h2>
                <p className='mb-4 fs-2'>Name: {user?.displayName}</p>
                <p className='mb-4 fs-2'>Email: {user?.email}</p>
                <img style={measurement} src={user?.photoURL} alt="" />
            </div>: <h4>Please <Link to='/login'>Login</Link></h4>}
        </div>
    );
};

export default Profile;