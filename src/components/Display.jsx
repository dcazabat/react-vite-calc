import React from 'react';
import './style/Display.css';

export default function Display({ value }) {

    return (
        <div className='display'>
            <input className="display-container" type="text" value={value} readOnly></input>
        </div>
    )
};