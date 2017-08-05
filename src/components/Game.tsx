import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PuzzleBoard } from './PuzzleBoard';
import { ActionBar } from './ActionBar';
import { GameState } from '../common/enums';
import { IGameState } from '../common/interfaces';

export class Game extends React.Component<{}, IGameState> {
  private static COMPLETED_PUZZLE = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0]
  ];

  private static DEFAULT_BOARD_SIZE = 4;

  constructor(props) {
    super(props);
    this.state = {
      puzzlePieces: Game.COMPLETED_PUZZLE,
      gameState: GameState.NotStarted,
      totalMoves: 0,
      boardSize: Game.DEFAULT_BOARD_SIZE
    };

    this.shuffle = this.shuffle.bind(this);
    this.puzzlePieceClick = this.puzzlePieceClick.bind(this);
    this.cheat = this.cheat.bind(this);
  }

  private shuffle() {
    const tempPieces = this.state.puzzlePieces.slice();
    let m: number, n: number, temp: number;
    for (let i = this.state.boardSize; i > 0; i--) {
      for (let j = this.state.boardSize; j > 0; j--) {
        m = Math.floor(Math.random() * i);
        n = Math.floor(Math.random() * j);
        temp = tempPieces[i - 1][j - 1];
        tempPieces[i - 1][j -1] = tempPieces[m][n];
        tempPieces[m][n] = temp;
      }
    }

    this.setState({
      puzzlePieces: tempPieces,
      gameState: GameState.InProgress,
      totalMoves: 0,
      boardSize: this.state.boardSize
    });
  }

  private puzzlePieceClick(id: number) {
    const tempPieces = this.state.puzzlePieces.slice()
    if (this.movePiece(id, tempPieces)) {
      // successfully moved piece, update state
      this.setState({
        puzzlePieces: tempPieces,
        gameState: this.isGameOver() ? GameState.Complete : GameState.InProgress,
        totalMoves: ++this.state.totalMoves,
        boardSize: this.state.boardSize
      });
    }
  }

  private movePiece(id: number, pieces: number[][]): boolean {
    // find current location in the board
    let x = -1, y = -1;
    for (let i = 0; i < this.state.boardSize; i++) {
      for (let j = 0; j < this.state.boardSize; j++) {
        if (id === pieces[i][j]) {
          x = i;
          y = j;
        }
      }
    }

    if (x > -1) {
      if (y - 1 >= 0 && pieces[x][y-1] === 0) {
        // move up
        pieces[x][y-1] = pieces[x][y];
        pieces[x][y] = 0;
        return true;
      } else if (y + 1 < this.state.boardSize && pieces[x][y+1] === 0) {
        // move down
        pieces[x][y+1] = pieces[x][y];
        pieces[x][y] = 0;
        return true;
      } else if (x - 1 >= 0 && pieces[x-1][y] === 0) {
        // move left
        pieces[x-1][y] = pieces[x][y];
        pieces[x][y] = 0;
        return true;
      } else if (x + 1 < this.state.boardSize && pieces[x+1][y] === 0) {
        // move right
        pieces[x+1][y] = pieces[x][y];
        pieces[x][y] = 0;
        return true;
      }
    }

    return false;
  }

  private isGameOver(): boolean {
    let prev = 0;
    for (let i = 0; i < this.state.boardSize; i++) {
      for (let j = 0; j < this.state.boardSize; j++) {
        if (i === this.state.boardSize - 1
            && j === this.state.boardSize - 1) {
            return this.state.puzzlePieces[i][j] === 0;
        } else { 
          if (this.state.puzzlePieces[i][j] <= prev) {
            return false;
          } else { 
            prev = this.state.puzzlePieces[i][j];
          }
        }
      }
    }
    return true;
  }

  private cheat() {
    this.setState({
      puzzlePieces: Game.COMPLETED_PUZZLE,
      gameState: GameState.Complete,
      totalMoves: 1,
      boardSize: Game.DEFAULT_BOARD_SIZE
    });
  }

  render() {
    return (
      <div style={{textAlign: 'center', backgroundColor: '#1f8dd6', padding:'.5em', color:'#2d3e50'}}>
        <h2>15-Puzzle</h2>
        <ActionBar totalMoves={this.state.totalMoves} shuffleClick={this.shuffle} gameState={this.state.gameState}></ActionBar>
        <PuzzleBoard puzzlePieces={this.state.puzzlePieces} pieceClick={this.puzzlePieceClick} gameState={this.state.gameState}></PuzzleBoard>
        <button className='pure-button' onClick={this.cheat}>Do not click</button>
      </div>
    );
  }
}