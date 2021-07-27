import React, {useContext} from 'react';
import './Content.css';
import traductions from '../../assets/data.js'
import {MyContext} from '../Context/Context.js'

const Content = () => {
    const {lang} = useContext(MyContext)
    console.log(lang)
    return (
        <div className="content">
            <h1>{traductions.FR.title}</h1>
        </div>
    );
}

export default Content;
