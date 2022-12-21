import React, { useState } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import './App.css';
import './Toggle.css';
import { calculate, factorial } from './logic/Calculate'
import { useEffect } from 'react';

export default function App() {
    const [total, setTotal] = useState('');
    const [onof, setOnOff] = useState(false)

    const handleClick = (buttonName) => {
        if (onof) {
            setTotal(calculate(total, buttonName).valor)
        } else {
            setTotal('')
            alert('Enciendela !!!')
        }
    }

    useEffect(() => {
        if (total != '') {
            setTotal('')
        }
    },[onof])
    return (
        <div className='app'>
            <div className="header">
                <span className="calculator">
                    Calculadora Cientifica
                </span>
                <div>
                    <input class="tgl tgl-ios" id="cb2" type="checkbox" onClick={(e) => {setOnOff(!onof)}}/>
                    <label class="tgl-btn" for="cb2"></label>
                </div>
            </div>

            <Display value={total} />
            <ButtonPanel clickHandler={handleClick} />
        </div>
    )
};