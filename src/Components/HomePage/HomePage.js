import React from 'react';
import  Content from '../Content/Content.js'
import CountriesSelector from '../CountriesSelector/CountriesSelector.js'

const HomePage = () => {
    return (
        <div>
            <CountriesSelector/>
            <Content/>

        </div>
    );
}

export default HomePage;
