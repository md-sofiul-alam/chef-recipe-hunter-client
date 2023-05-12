import React from 'react';
import Chef from './Chef';


const ChefRecipe = ({ chefs }) => {
    return (
        <div>
            <div className='text-center w-50 mx-auto mb-5'>
                <h2 className='text-primary'>Chefs & their Recipes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ad reprehenderit nesciunt fugit, facere esse impedit cupiditate repellendus eligendi sed.</p>
            </div>
            <div className="row">
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </div>
    );
};

export default ChefRecipe;