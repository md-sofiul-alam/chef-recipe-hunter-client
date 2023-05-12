import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleRecipe = ({ recipe }) => {
    const handleFavourite = (event) => {
        toast("Saved as Favourite!")
        const btn = event.target;
        btn.setAttribute('disabled', true)
    }

    const { _id, item_name, ingredients, cooking_method, rating } = recipe;
    return (
        <div className="col-md-4">
            <Card border="info">
                <Card.Header><strong>Recipe number: {_id}</strong> </Card.Header>
                <Card.Body>
                    <Card.Title>Recipe name: <span className='text-primary'>{item_name}</span></Card.Title>
                    <Card.Text>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th className='text-center' colSpan={5}>Ingredients</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ingredients[0]}</td>
                                    <td>{ingredients[1]}</td>
                                    <td>{ingredients[2]}</td>
                                    <td>{ingredients[3]}</td>
                                    <td>{ingredients[4]}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <p><strong>Cooking method:</strong> {cooking_method}</p>
                        <p><strong className='me-2'>Ratings:</strong>
                            <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar />}
                            />
                        </p>
                    </Card.Text>
                    <Button onClick={handleFavourite} variant="outline-info">Favourite</Button>
                    <ToastContainer />
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleRecipe;