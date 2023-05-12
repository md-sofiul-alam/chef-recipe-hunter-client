import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const ClientComments = () => {
    const imgHeight = {
        height: "350px"
    }
    return (
        <div className='row justify-content-center carousel my-5'>
            <div className="col-md-6">
                <div className='text-center mb-4'>
                    <h2 className='text-primary'>Client's Comment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ad reprehenderit nesciunt fugit, facere esse impedit cupiditate.</p>
                </div>
                <Carousel slide={false} >
                    <Carousel.Item>
                        <img
                            style={imgHeight}
                            className="d-block w-100"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Panta_Ilish.jpg/640px-Panta_Ilish.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3><mark>Kurban Ali</mark> </h3>
                            <p><mark>Nulla vitae elit libero, a pharetra augue mollis interdum.</mark></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={imgHeight}
                            className="d-block w-100"
                            src="https://static.toiimg.com/thumb/msid-93187737/93187737.jpg?width=500&resizemode=4"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3><mark>Ali Mia</mark></h3>
                            <p><mark>Nulla vitae elit libero, a pharetra augue mollis interdum.</mark></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={imgHeight}
                            className="d-block w-100"
                            src="https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1591993371451-8Q21JV4P4FL33U0D1R86/2.jpg?format=1500w"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3><mark>Suruj Mia</mark></h3>
                            <p><mark>Nulla vitae elit libero, a pharetra augue mollis interdum.</mark></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default ClientComments;