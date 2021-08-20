import React, {Component} from 'react';
import './Step.css';

function Step(props) {
    let inputData = '';
    return (
        <div>
            <label className="steplabel">Krok: </label>
            <input type="number" min="1" value={props.stepValue} ref={(data)=>{inputData = data;}} onChange={()=>{props.setStepMethod(inputData);}}/> 
        </div>
    )
}

export default Step;

