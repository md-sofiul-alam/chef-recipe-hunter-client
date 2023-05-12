import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import SingleRecipe from './SingleRecipe';

const ChefDetails = () => {
    const details = useLoaderData();
    const { name, image_url, experience, others } = details;
    const singleRecipe = details.single_recipe;
    
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-8 col-sm-12">
                    <h2 className='text-center py-4 text-primary'>Chef Details</h2>
                    <Card>
                        <Card.Img className='p-3 rounded' variant="top" src={image_url} />
                        <Card.Body>
                            <hr />
                            <Card.Title className='text-primary fs-2'>Name: {name}</Card.Title>
                            <Card.Text>
                                <p><strong>Description:</strong>{others[0]?.description.slice(0, 150)}</p>
                                <p><strong>Likes:</strong> {others[0]?.likes}</p>
                                <p><strong>Number of Recipe:</strong> {others[0]?.recipe_number}</p>
                                <p><strong>Experience:</strong> {experience}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row my-5">
                <h3 className='text-center mb-4'>My Other Recipes</h3>
                {
                    singleRecipe.map(recipe => <SingleRecipe
                        key={recipe._id}
                        recipe={recipe}
                    ></SingleRecipe>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;