import React from 'react';
import './style/Button.css';


export default function Button({ value, name, clickHandler, classStyle }) {

    const handleClick = () => {
        clickHandler((value) ? value : name)
    }
    const className = ["flex-container", classStyle ];
    return (
        <div className={className.join(" ").trim()}>
            <button className="btn btn-secondary" onClick={handleClick}>
                {name}
            </button>
        </div>
    )
};