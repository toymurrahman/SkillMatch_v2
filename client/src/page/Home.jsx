import React from 'react';
import Carousel from '../component/Carousel';
import TabCategories from '../component/TabCategories';
import About from './About';

const Home = () => {

    return (
        <div>
            <Carousel/>
            <TabCategories />
            <About/>
        </div>
    );
};

export default Home;