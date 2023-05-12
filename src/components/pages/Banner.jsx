import React from 'react';
import './Banner.css'
import { Button } from 'react-bootstrap';
import Chef from '../../assets/chef.png'

const Banner = () => {
    return (
        <div className='top-banner my-5'>
            <div className="row">
            <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <img src={Chef} alt="" className='rounded-circle' />
                </div>
                <div className="col-md-6 col-sm-12 d-flex align-items-center bg-info p-2 bg-opacity-50 py-5 px-5">
                    <div>
                        <h2 className='fw-bold'>Chef Stories Food</h2>
                        <p className='my-4'>Chef Stories serve the best test of historical foods Bangladesh. You Will not find anyone like us. We have never use other animals like some ****** Restaurant</p>
                        <Button variant="primary">Order Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;