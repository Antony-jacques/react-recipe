import React from 'react';
import "./CountriesSelector.css"
import FrenchFlag from '../../assets/france.svg'
import SpanishFlag from '../../assets/spain.svg'
import UKFlag from '../../assets/united-kingdom.svg'

const CountriesSelector = () => {
    return (
        <div className="CountriesSelector">
            <img src={FrenchFlag} alt=""/>
            <img src={SpanishFlag} alt=""/>
            <img src={UKFlag} alt=""/>
        </div>
    );
}

export default CountriesSelector;
