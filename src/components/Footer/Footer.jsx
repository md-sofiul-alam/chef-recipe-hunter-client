import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-primary text-white'>
            <div className='container'><div className="row py-4 justify-content-between">
            <div className="col-md-4 text-start links">
                        <h3>Links</h3>
                        <hr className='border-white'/>
                        <Link to="/">Home</Link>
                        <Link to="/blogs">Blogs </Link>
                        <Link >About Us </Link>
                        <Link >Contact </Link>
                    </div>
                    <div className="col-md-7">
                        <h3>Bangla Food</h3>
                        <hr className='border-white'/>
                        <p>Chief Stories is known for its vibrant flavors and unique blend of sweet and spicy tastes. The use of mustard oil, fish, and panch phoron (a blend of five spices) are some of the defining features of Bengali food. Popular dishes include fish curry, biryani, and sweets like rasgulla and mishti doi.</p>
                    </div>
                </div>
                <div className="row text-center p-3 border-top">
                    <small>&copy; Chef Stories</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;