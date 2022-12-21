import React from 'react';
import Button from './Button'
import './style/ButtonPanel.css';
import { 
    FaDivide, 
    FaTimes, 
    FaBackspace, 
    FaMinus, 
    FaPlus, 
    FaEquals, 
    FaPercentage, 
    FaSquareRootAlt, } from 'react-icons/fa'

export default function ButtonPanel({ clickHandler }) {

    const handleClick = (buttonName) => {
        clickHandler(buttonName)
    }

    const divide = <FaDivide />
    const multiply = <FaTimes />
    const del = <FaBackspace />
    const minus = <FaMinus />
    const plus = <FaPlus />
    const equals = <FaEquals />
    const percentage = <FaPercentage />
    const squareRoot = <FaSquareRootAlt/>

    return (
        <div className="flex-container">
            <div className="row">
                <Button name={squareRoot} value='sqrt' clickHandler={handleClick} />
                <Button name="sin" value='sin' clickHandler={handleClick} />
                <Button name="ln" value='ln' clickHandler={handleClick} />
                <Button name='eˣ' value='ePow' clickHandler={handleClick} />
                <Button name="|X|" value='abs' clickHandler={handleClick} />
            </div>

            <div className="row">
                <Button name='X!' value='factorial' clickHandler={handleClick} />
                <Button name='cos' value='cos' clickHandler={handleClick} />
                <Button name='log' value='log' clickHandler={handleClick} />
                <Button name="X²" value='square' clickHandler={handleClick} />
                <Button name="π" value='pi' clickHandler={handleClick} />
            </div>

            <div className="row">
                <Button name={percentage} value='%' clickHandler={handleClick} classStyle={'operator'} />
                <Button name="tan" value='tan' clickHandler={handleClick} />
                <Button name="1/x" value='customDivide' clickHandler={handleClick} />
                <Button name="Xʸ" value='power' clickHandler={handleClick} />
                <Button name="e" clickHandler={handleClick} />
            </div>

            <div className="row">
                <Button name={divide} value='/' clickHandler={handleClick} classStyle={'operator'} />
                <Button name="7" clickHandler={handleClick} classStyle={'number'} />
                <Button name="4" clickHandler={handleClick} classStyle={'number'} />
                <Button name="1" clickHandler={handleClick} classStyle={'number'} />
                <Button name="." clickHandler={handleClick} />
            </div>

            <div className="row">
                <Button name='(' clickHandler={handleClick} classStyle={'operator'} />
                <Button name="8" clickHandler={handleClick} classStyle={'number'} />
                <Button name="5" clickHandler={handleClick} classStyle={'number'} />
                <Button name="2" clickHandler={handleClick} classStyle={'number'} />
                <Button name="0" clickHandler={handleClick} classStyle={'number'} />
            </div>

            <div className="row">
                <Button name=')' clickHandler={handleClick} classStyle={'operator'} />
                <Button name="9" clickHandler={handleClick} classStyle={'number'} />
                <Button name="6" clickHandler={handleClick} classStyle={'number'} />
                <Button name="3" clickHandler={handleClick} classStyle={'number'} />
                <Button name={del} value='del' clickHandler={handleClick} classStyle={'orange'} />
            </div>

            <div className="row">
                <Button name="C" clickHandler={handleClick} classStyle={'orange'} />
                <Button name={minus} value='-' clickHandler={handleClick} classStyle={'operator'} />
                <Button name={plus} value='+' clickHandler={handleClick} classStyle={'operator'} />
                <Button name={multiply} value='*' clickHandler={handleClick} classStyle={'operator'} />
                <Button name={equals} value='=' clickHandler={handleClick} classStyle={'blue'} />
            </div>
        </div>
    )
};