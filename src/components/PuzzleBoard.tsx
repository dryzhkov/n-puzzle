import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PuzzlePiece } from './PuzzlePiece';

export class PuzzleBoard extends React.Component<IPuzzleBoardProps, {}> {
  render() {
    return (
      <div className='pure-g' style={{ width: '200px', margin: '1em auto', border: '1px outset', background: '#2d3e50'}}>
        {
              this.props.puzzlePieces.map((row,i) => {
              return row.map((col, j) =>
                    <div className='pure-u-1-4'>
                      { 
                        col > 0 && 
                        <PuzzlePiece piece={col} pieceClick={this.props.pieceClick} gameState={this.props.gameState}></PuzzlePiece>
                      }
                    </div>
                  )
              })
            }
      </div>
    );
  }
}