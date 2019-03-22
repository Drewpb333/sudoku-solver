import React from 'react';
import Row from '../Row/Row';
import './Card.css';

const Card = props=> {
    const {unsolvedBoard} = props.boards;
    const unsolvedRows = unsolvedBoard.map((rowNum, i)=>{
        return <Row row={i} values={rowNum} handleInput={input=>props.handleInput(input)} boards={props.boards}/>;
    })
    return (
        <tbody>
            {unsolvedRows}
        </tbody>
    );
};

export default Card;