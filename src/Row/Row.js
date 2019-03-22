import React from 'react';
import Square from '../Square/Square';
import './Row.css';

const Row = props => {
    const squareValues = props.values.map((num, i)=>{
        return <Square id={`${props.row}${i.toString()}` }  boards={props.boards}  value={num} handleInput={input=>props.handleInput(input)}/>
    });

    return (
        <tr className="board-row">
            {squareValues}
        </tr>
    );
}

export default Row;