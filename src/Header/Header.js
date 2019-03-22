import React from 'react';
import logo from '../logo.svg';
import './Header.css';

const Header = props => {        
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>Sudoku Solver</div>
            </header>
        </div>  
    ); 
}

export default Header;