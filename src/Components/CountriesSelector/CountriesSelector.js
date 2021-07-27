import React, {useContext} from 'react';
import {MyContext} from '../Context/Context.js';
import "./CountriesSelector.css"
import FrenchFlag from '../../assets/france.svg'
import SpanishFlag from '../../assets/spain.svg'
import UKFlag from '../../assets/united-kingdom.svg'

const CountriesSelector = () => {

const {toggleCountry} = useContext(MyContext)
console.log(toggleCountry)

    return (
        <div className="CountriesSelector">
            <img onClick={()=>{toggleCountry("FR")}} src={FrenchFlag} alt=""/>
            <img onClick={()=>{toggleCountry("ES")}} src={SpanishFlag} alt=""/>
            <img onClick={()=>{toggleCountry("EN")}} src={UKFlag} alt=""/>
        </div>
    );
}

export default CountriesSelector;
