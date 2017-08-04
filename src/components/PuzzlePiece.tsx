/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GameState } from './Game';

export class PuzzlePiece extends React.Component<IPuzzlePieceProps, {}> {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  private click() {
    this.props.pieceClick(this.props.piece);
  }

  render() {
    const divStyle = {  
      border: '3px outset', 
      width: '50px',
      height: '50px',
      fontSize: '2rem',
      lineHeight: '3rem',
      textAlign: 'center',
      cursor: 'pointer'
    };

    return (
      <button style={divStyle} onClick={this.click} disabled={this.props.gameState !== GameState.InProgress}>
        { this.props.piece }
      </button>
    );
  }
}