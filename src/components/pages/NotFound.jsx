import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const errorPage = {
        fontSize: "4rem",
        color: "tomato",
        textAlign: "center"
    }
    return (
        <div className='container'>
            <div className="row my-5">
                <h2 style={errorPage}>OPPs !!! <br /> Page Not Found.</h2>
                <button className='bg-waring btn d-inline my-5'>
                    <Link to='/'>Go Home</Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;