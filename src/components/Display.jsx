import React from 'react';
import './style/Display.css';

export default function Display({ value }) {

    return (
        <div className='text-center m-3'>
            <input className="w-100 display" type="text" value={value} readOnly></input>
        </div>
    )
};