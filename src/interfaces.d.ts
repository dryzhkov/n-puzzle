interface IPuzzlePieceProps {
  piece: number;
  pieceClick: (id: number) => void;
  gameState:any;
}

interface IGameState {
  puzzlePieces: number[][];
  gameState: any;
  totalMoves: number;
  boardSize: number;
  currentTime?: Date;
}

interface IPuzzleBoardProps {
  puzzlePieces: number[][];
  pieceClick: (id: number) => void;
  gameState: any;
}

interface IActionBarProps {
  totalMoves: number;
  shuffleClick: () => void;
  gameState: any;
}

interface ITimerProps {
  gameState:any;
}