import React from 'react';
import './Square.css';

const Square = props=> {   
    //row coordinate is equal to first number and column coordinate is equal to second
    const row = props.id.split("")[0];
    const column = props.id.split("")[1];

    //assign correct CSS upon solve button being pressed
    let correctInput;
    let inputCSS = "input-square";
    let squareBackground = {};
    if(props.boards.differentialBoard[0]){
        correctInput = props.boards.differentialBoard[row][column] === false? false: true;
        inputCSS = correctInput? "correct-input-square": "incorrect-input-square";
        squareBackground = correctInput? {"background": "#bdf3bd"} :{"background": "#ec5b5b"};
    }    

    //checks original unsolved array to see if value is 0
    let display;
    const {originalUnsolvedBoard} = props.boards;
    if(originalUnsolvedBoard[row][column] !== 0){
        display = props.value;
    }
    else{
        display = <input type="text" className={inputCSS} onChange={e=> props.handleInput([e.target.value, row, column])}></input>
    }

    return (
        <td className="square" style={display !== props.value? squareBackground:{}} id={props.id}>
            {display}
        </td>
    );
};

export default Square;