import React from 'react';
import './Square.css';

const Square = props=> {   
    //row coordinate is equal to first number and column coordinate is equal to second
    const row = props.id.split("")[0];
    const column = props.id.split("")[1];

    //assign correct CSS upon solve button being pressed
    // let correctInput;
    let inputCSS = "input-square";
    let squareBackground = {};
    //checks original unsolved array to see if value is 0
    let inputDisplay;
    inputDisplay = <input type="text" className={inputCSS} onChange={e=> props.handleInput([e.target.value, row, column])}></input>
    let display = props.value > 0 && props.value <= 9 && props.solved? props.value: inputDisplay;

    return (
        <td className="square" style={display !== props.value? squareBackground:{}} id={props.id}>
            {display}
        </td>
    );
};

export default Square;