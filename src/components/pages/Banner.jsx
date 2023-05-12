import React from 'react';
import './Banner.css'
import { Button } from 'react-bootstrap';
import Chef from '../../assets/chef.png'

const Banner = () => {
    return (
        <div className='top-banner my-5'>
            <div className="row">
                <div className="col-md-6 col-sm-12 d-flex align-items-center bg-info p-2 bg-opacity-50 py-5 px-5">
                    <div>
                        <h2 className='fw-bold'>Bangladeshi Standard Food</h2>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis obcaecati praesentium repellat velit deserunt, consectetur dolorem suscipit iste perferendis est.</p>
                        <Button variant="primary">Order Now</Button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <img src={Chef} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;