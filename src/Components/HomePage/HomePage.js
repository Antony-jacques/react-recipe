import React from 'react';
import  Content from '../Content/Content.js'
import CountriesSelector from '../CountriesSelector/CountriesSelector.js'
import Footer from '../Footer/Footer.js'

const HomePage = () => {
    return (
        <div 
        style={{
            // position:'relative',
             }}
        >
            <CountriesSelector/>
            <Content/>
            <Footer/>

        </div>
    );
}

export default HomePage;
