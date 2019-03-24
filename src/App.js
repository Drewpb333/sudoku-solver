import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';

class App extends Component {
  state = {
    board: [],
    unsolvedBoard: [],
    //for persisting original state in Square components
    originalUnsolvedBoard: [],
    //for displaying correct and incorrect inputs
    differentialBoard: []
  }

  createBoardArr = () =>{
    let emptyBoard = [[],[],[],[],[],[],[],[],[]];
    let initialArray = [0,0,0,0,0,0,0,0,0];
    let initialBoard = emptyBoard.map(x => [...initialArray]);
    console.log(initialBoard);
    this.setState({
      board: initialBoard
    })
  };

  //adds input boxes for blank spaces
  // createUnsolvedBoard = board => {
  //   let unsolvedBoard = board.map((val, i)=>{
  //     return [...board[i]];
  //   });
  //   let originalUnsolvedBoard = board.map((val, i)=>{
  //     return[...board[i]];
  //   });
  //   const emptySquares = this.determineEmptySquares();
  //   //removes three to five input values
  //   for(let q = 0; q < unsolvedBoard.length; q++){
  //     const y = Math.floor(Math.random() * emptySquares[0]) + emptySquares[1];
  //     for(let j = 0; j < y; j++){
  //       const rand = Math.floor(Math.random() * 9);
  //       unsolvedBoard[q][rand] = 0;
  //       originalUnsolvedBoard[q][rand] = 0;
  //     }
  //   }
  //   return [unsolvedBoard, originalUnsolvedBoard];
  // }

  //input is array equal to value, row, and column of number
  handleInput = input=>{
    const value = parseInt(input[0]);
    const row = input[1];
    const column = input[2];
    this.setState(prevState=>{
      const unsolvedBoard = prevState.unsolvedBoard;
      unsolvedBoard[row][column] = value;
      return {unsolvedBoard};
    });
  }

  // puzzleSolvedHandler = () =>{
  //   let solved = true;
  //   const solvedBoard = this.state.board;
  //   const unsolvedBoard = this.state.unsolvedBoard;
  //   const differentialBoard = this.state.unsolvedBoard.map(x=>[...x]);
  //   for(let i = 0; i < solvedBoard.length; i++){
  //     for(let j = 0; j < solvedBoard[i].length; j++){
  //       if(solvedBoard[i][j] !== unsolvedBoard[i][j]) {
  //         solved = false;
  //         differentialBoard[i][j] = false;
  //       }
  //     }
  //   }
  //   this.setState({differentialBoard});
  //   if(solved){
  //     alert("Congrats! You Won!");
  //   }
  //   else{
  //     alert("Keep trying");
  //   }
  // }

  componentWillMount = () =>{
    this.createBoardArr();
  }

  render() {
    const boards = {
      board: this.state.board
    }
    return (
      <div className="App">
        <Header/>      
        <table className="board">
          <Card boards={boards} handleInput={input=>this.handleInput(input)}/>
        </table>
        <button onClick={this.puzzleSolvedHandler}>Solve Puzzle</button>
      </div>
    );
  }
}

export default App;
