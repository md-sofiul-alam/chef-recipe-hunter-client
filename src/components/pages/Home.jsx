import React from 'react';
import Banner from './Banner';
import ChefRecipe from './ChefRecipe';
import TopRecipe from './TopRecipe';
import ClientComments from './ClientComments';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div className='container'>
            <div className="row">
                <Banner />
                <ChefRecipe chefs={chefs} />
                <TopRecipe/>
                <ClientComments/>
            </div>
        </div>
    );
};

export default Home;