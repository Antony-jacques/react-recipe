import React from 'react';
import './Content.css';
import traductions from '../../assets/data.js'

const Content = () => {
    return (
        <div className="content">
            <h1>{traductions.FR.title}</h1>
        </div>
    );
}

export default Content;
