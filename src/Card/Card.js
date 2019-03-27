import React from 'react';
import Row from '../Row/Row';
import './Card.css';

const Card = props=> {
    const {board} = props.boards;
    const unsolvedRows = board.map((rowNum, i)=>{
        return <Row row={i} values={rowNum} handleInput={input=>props.handleInput(input)} boards={props.boards}/>;
    });
    return (
        <tbody>
            {unsolvedRows}
        </tbody>
    );
};

export default Card;