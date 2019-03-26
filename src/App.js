import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';

class App extends Component {
  state = {
    board: [],
    updatedBoard: [],
    //for displaying correct and incorrect inputs
    solvedPuzzle: [],
    solved: false
  }

  createBoardArr = () =>{
    let emptyBoard = [[],[],[],[],[],[],[],[],[]];
    let initialArray = [0,0,0,0,0,0,0,0,0];
    let initialBoard = emptyBoard.map(x => [...initialArray]);
    this.setState({
      board: initialBoard,
      updatedBoard: initialBoard
    })
  }

  //input is array equal to value, row, and column of number
  handleInput = input=>{
    const value = parseInt(input[0]);
    const row = input[1];
    const column = input[2];
    this.setState(prevState=>{
      const updatedBoard = prevState.updatedBoard;
      updatedBoard[row][column] = value;
      return updatedBoard;
    });
    console.log(this.state.updatedBoard);
  }

  puzzleSolvedHandler = () => {
    let puzzle = this.state.updatedBoard;
    const valid = (x, y) => {
      var v = [];
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          v.push(puzzle[x][i * 3 + j])
          v.push(puzzle[i * 3 + j][y])
          v.push(puzzle[3 * Math.floor(x / 3) + i][3 * Math.floor(y / 3) + j])
        }
      }
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(e => v.indexOf(e) == -1)
    }
    const rec = (x, y) => {
      if (y == 9) {
        console.log(this.state.updatedBoard);
        this.setState({
          updatedBoard: puzzle,
          solved: true
        })
        return puzzle
      } else if (!puzzle[x][y]) {
        const correct = valid(x, y).some(i => {
          puzzle[x][y] = i;
          return rec((x + 1) % 9, y + (x == 9 ? 1 : 0))
        })
        if (correct)
          return puzzle;
        puzzle[x][y] = 0;
      } else {
        return rec((x + 1) % 9, y + (x == 8 ? 1 : 0))
      }
    }
    return rec(0, 0)
  }

  componentWillMount = () =>{
    this.createBoardArr();
  }

  render() {
    const boards = {
      board: this.state.board,
      solved: this.state.solved
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
