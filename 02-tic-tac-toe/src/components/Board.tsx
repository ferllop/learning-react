import { useState } from "react"
import { Board as BoardType, canPlayInSquare, emptyBoard, hasWinner, updateBoard } from "../models/Board"
import { Id as SquareId, Player} from "../models/Square"
import Square from "./Square"
import WinnerMoveMarker from "./WinnerMoveMarker"

type Props = {
  actualPlayer: Player
  onWinner: () => void
  onTurnChange: () => void
}

const Board = ({actualPlayer, onWinner, onTurnChange}: Props) => {
  const [board, setBoard] = useState<BoardType>(emptyBoard)

  const handleSquareClick = (player: Player) => (id: SquareId) => () => {
    if (canPlayInSquare(board, id)) {
      const newBoard = updateBoard(board, id, player)
      setBoard(newBoard)
      if (hasWinner(newBoard)) {
        onWinner()
      } else {
        onTurnChange()
      }
    }
  }

  return <>
    <div className="board">
      {board.map(square => 
        <Square
          key={square.id}
          id={square.id}
          player={square.player} 
          onSquareClick={handleSquareClick(actualPlayer)}
          />)}
        {hasWinner(board) && <WinnerMoveMarker winnerBoard={board}/>}
    </div>
  </>
}

export default Board
