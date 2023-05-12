import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Chef = ({ chef }) => {
    const { id, name, image_url, experience, others, likes } = chef;
    const measurement = {
        height: '330px',
        width: '350px',
        margin: '0 auto',
        display: 'block'
    }
    return (
        <div className="col-md-4 mb-4">
            <Card>
                <LazyLoadImage
                    style={measurement}
                    src={image_url}
                    className='p-3'
                    effect="blur"
                />
                {/* <Card.Img  variant="top" /> */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Experience: {experience}</p>
                        <p>Number of Recipe: {others[0]?.recipe_number}</p>
                        <p>Likes: {others[0]?.likes}</p>
                    </Card.Text>
                    <Button variant="primary">
                        <Link to={`/recipes/${id}`}>View Recipe</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;