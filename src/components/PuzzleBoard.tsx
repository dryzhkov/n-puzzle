import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PuzzlePiece } from './PuzzlePiece';

export class PuzzleBoard extends React.Component<IPuzzleBoardProps, {}> {
  render() {
    return (
      <div>
        <table style={{border: '3px solid #777'}}>
          <tbody>
            {
              this.props.puzzlePieces.map((row,i) => {
              return <tr key={i}>
                {
                  row.map((col, j) =>
                    <td key={j}>
                      { 
                        col > 0 && 
                        <PuzzlePiece piece={col} pieceClick={this.props.pieceClick} gameState={this.props.gameState}></PuzzlePiece>
                      }
                    </td>
                  )
                }
              </tr>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}