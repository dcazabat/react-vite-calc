import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import { calculate, factorial } from './logic/Calculate'
import './App.css';

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
    }, [onof])

    return (
        <div className='app container'>
            <div className="row text-center align-items-center mt-3">
                <div className="col-8 col-sm-9 pt-3">
                    <h6 className="fw-bold text-warning">
                        Calculadora Cientifica
                    </h6>
                </div>
                <div className="col mx-3 pt-3 form-check form-switch form-check-reverse">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" checked={onof} onClick={(e) => { setOnOff(!onof) }}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckReverse"></label>
                </div>
            </div>

            <Display value={total} />
            <ButtonPanel clickHandler={handleClick} />
        </div>
    )
};