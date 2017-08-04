import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GameState } from './Game';
import { Timer } from './Timer';

export class ActionBar extends React.Component<IActionBarProps, {}> {
  render() {
    return (
      <div>
        <button style={{marginRight: '.5em', cursor: 'pointer'}} onClick={this.props.shuffleClick}>Shuffle</button>
        <span>to start or restart the game</span>
        <div>Total moves: {this.props.totalMoves}</div>
        <Timer gameState={this.props.gameState}></Timer>
        {
          this.props.gameState === GameState.Complete && <div>Congrats. You won!!!</div>
        }
      </div>
    );
  }
}