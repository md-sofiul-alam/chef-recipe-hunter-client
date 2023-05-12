import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TopRecipe = () => {
    const handleFavourite = (event) => {
        toast("Saved as Favourite!")
        const btn = event.target;
        btn.setAttribute('disabled', true)
    }
    const format = {
        backgroundColor: "#cfe2ff"
    }
    return (
        <div style={format} className='text-primary my-5 py-4'>
            <ToastContainer />
            <div className='text-center w-50 mx-auto mb-4'>
                <h2>Top Recipes of this Week</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ad reprehenderit nesciunt fugit, facere esse impedit cupiditate repellendus eligendi sed.</p>
            </div>
            <div className="row text-white">
                <div className="col-md-4">
                    <Card className='bg-primary mb-4'>
                        <Card.Body>
                            <img className='w-100' src="https://images.slurrp.com/prod/articles/mdzr1y06p2q.webp" alt="" />
                            <Card.Title className='my-3'> Panta Ilish </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="success" onClick={handleFavourite}>Favourite</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 mb-4">
                    <Card className='bg-success'>
                        <Card.Body>
                            <img className='w-100' src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/1425139_panta%20bhat%20rice%20water.jpg" alt="" />
                            <Card.Title className='my-3'> Panta Peyaj </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="info" onClick={handleFavourite}>Favourite</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className='bg-info'>
                        <Card.Body>
                            <img className='w-100' src="https://www.bhorerkagoj.com/wp-content/uploads/2017/12/Untitled-1-358.jpg" alt="" />
                            <Card.Title className='my-3'> Panta Vorta </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="success" onClick={handleFavourite}>Favourite</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div >
    );
};

export default TopRecipe;