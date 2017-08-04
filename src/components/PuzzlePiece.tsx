/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class PuzzlePiece extends React.Component<IPuzzlePieceProps, {}> {

  render() {
    const label = this.props.piece;
    const divStyle = {  
      border: '3px outset', 
      width: '50px',
      height: '50px',
      fontSize: '2rem',
      lineHeight: '3rem',
      textAlign: 'center'
    };

    return (
      <div style={divStyle}>
        { label }
      </div>
    );
  }
}