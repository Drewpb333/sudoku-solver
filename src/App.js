import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';

class App extends Component {
  state = {
    board: [],
    updatedBoard: [],
    //for persisting original state in Square components
    originalUnsolvedBoard: [],
    //for displaying correct and incorrect inputs
    differentialBoard: []
  }

  createBoardArr = () =>{
    let emptyBoard = [[],[],[],[],[],[],[],[],[]];
    let initialArray = [0,0,0,0,0,0,0,0,0];
    let initialBoard = emptyBoard.map(x => [...initialArray]);
    this.setState({
      board: initialBoard,
      updatedBoard: initialBoard
    })
  };

  //input is array equal to value, row, and column of number
  handleInput = input=>{
    const value = parseInt(input[0]);
    console.log(input);
    const row = input[1];
    const column = input[2];
    this.setState(prevState=>{
      const updatedBoard = prevState.updatedBoard;
      updatedBoard[row][column] = value;
      return {updatedBoard};
    });
    console.log(this.state.updatedBoard);
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
