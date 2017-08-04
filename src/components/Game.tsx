import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PuzzleBoard } from './PuzzleBoard';

export class Game extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <PuzzleBoard></PuzzleBoard>
      </div>
    );
  }
}