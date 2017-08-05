import {GameState} from './enums'; 

export interface IPuzzlePieceProps {
  piece: number;
  pieceClick: (id: number) => void;
  gameState: GameState;
}

export interface IGameState {
  puzzlePieces: number[][];
  gameState: GameState;
  totalMoves: number;
  boardSize: number;
  currentTime?: Date;
}

export interface IPuzzleBoardProps {
  puzzlePieces: number[][];
  pieceClick: (id: number) => void;
  gameState: GameState;
}

export interface IActionBarProps {
  totalMoves: number;
  shuffleClick: () => void;
  gameState: GameState;
}

export interface ITimerProps {
  gameState: GameState;
}

export interface ITimerState {
  hours: number;
  minutes: number;
  seconds: number;
}