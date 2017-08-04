import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PuzzlePiece } from './PuzzlePiece';

export class PuzzleBoard extends React.Component<{}, {}> {
  private pieces = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0]
  ];
  render() {
    return (
      <div>
        <table style={{border: '3px solid #777'}}>
          <tbody>
            {
              this.pieces.map((row,i) => {
              return <tr key={i}>
                {
                  row.map((col, j) =>
                    <td key={j}>
                      { 
                        col > 0 && 
                        <PuzzlePiece piece={col}></PuzzlePiece>
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