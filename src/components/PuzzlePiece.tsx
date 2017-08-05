import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GameState } from '../common/enums';
import { IPuzzlePieceProps } from '../common/interfaces';

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
      width: '50px',
      height: '50px'
    };

    const styleClass = this.props.gameState === GameState.InProgress ? 'pure-button-active' : 'pure-button-disabled';

    return (
      <button style={divStyle} className={styleClass} onClick={this.click}>
        { this.props.piece }
      </button>
    );
  }
}