import React from 'react';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
          
            <Slider></Slider>
            <Products></Products>
            <button>Manage Inventories</button>
        </div>
    );
};

export default Home;