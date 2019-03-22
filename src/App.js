import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';

class App extends Component {
  state = {
    difficulty: "medium",
    board: [],
    unsolvedBoard: [],
    //for persisting original state in Square components
    originalUnsolvedBoard: [],
    //for displaying correct and incorrect inputs
    differentialBoard: []
  }

  // createBoardArr = () =>{
  //   let board = [[],[],[],[],[],[],[],[],[]];
  //   board.forEach(x=>x = [0,0,0,0,0,0,0,0,0]);
  //   for(var i=0; i < 9; i++){
  //     const boardColumns = this.checkBoardColumns(board);
  //     let noDuplicates = false;
  //     while(noDuplicates === false){
  //       let boardRow = this.addNumbertoSquare(board[i]);      
  //       for(let q=0; q < 9; q++){
  //         if(boardColumns[q].includes(boardRow[q])){
  //           break;
  //         }
  //         else if(q === 8){
  //           noDuplicates = true;
  //         }
  //       }
  //     }
  //   }
  //   const [unsolvedBoard, originalUnsolvedBoard] = this.createUnsolvedBoard(board);
  //   this.setState({
  //     board,
  //     unsolvedBoard,
  //     originalUnsolvedBoard
  //   })
  // };

  // addNumbertoSquare = boardRow =>{
  //   let numsArr = [1,2,3,4,5,6,7,8,9];
  //   for(var j=0; j < 9; j++){
  //     const randIndex = Math.floor(Math.random() * numsArr.length);
  //     boardRow[j] = numsArr[randIndex];
  //     numsArr.splice(randIndex, 1);
  //   }
  //   return boardRow;
  // }

  //creates new array to prevent duplicate numbers in columns
  // checkBoardColumns = board =>{
  //   let boardColumns = board.map((val, i)=>{
  //     return [...board[i]];
  //   })
  //   for(let i = 0; i < 9; i++){
  //     for(let j = 0; j < 9; j++){
  //       boardColumns[i][j] = board[j][i];
  //     }
  //   }
  //   return boardColumns;
  // }

  // determineEmptySquares = () => {
  //   const difficulty = this.state.difficulty;
  //   switch (difficulty){
  //     case "easy":
  //       return [2,1];
  //     case "difficult":
  //       return [3,6];
  //     default:  //default is medium
  //       return [3,3];
  //   }
  // }

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

  changeDifficultyHanlder = level => {
    this.setState({difficulty: level}, () => this.createBoardArr())
  }

  componentWillMount = () =>{
    // this.createBoardArr();
  }

  render() {
    const boards = {
      originalUnsolvedBoard: this.state.originalUnsolvedBoard,
      unsolvedBoard: this.state.unsolvedBoard,
      board: this.state.board,
      differentialBoard: this.state.differentialBoard
    }
    return (
      <div className="App">
        <Header className change={level=> this.changeDifficultyHanlder(level)}/>      
        <table className="board">
          <Card boards={boards} handleInput={input=>this.handleInput(input)}/>
        </table>
        <button onClick={this.puzzleSolvedHandler}>Check Puzzle</button>
      </div>
    );
  }
}

export default App;
