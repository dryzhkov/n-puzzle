import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GameState } from './Game';
import { Timer } from './Timer';

export class ActionBar extends React.Component<IActionBarProps, {}> {
  render() {
    return (
      <div>
        <span>To start or restart the game, click</span>
        <button onClick={this.props.shuffleClick}>Shuffle</button>
        <div>Total moves: {this.props.totalMoves}</div>
        {
          this.props.gameState === GameState.Complete && <div>Congrats. You won!!!</div>
        }
        <Timer gameState={this.props.gameState}></Timer>
      </div>
    );
  }
}