import { useState } from "react"
import { Player, Turn } from "../TicTacToe"
import { type Board, emptyBoard, isGameFinished } from "../models/Board"
import { SquareId } from "../models/Square"
import Square from "./Square"

type Props = {
  player1: Player
  player2: Player
  onFinishedGame: (winner: Player) => void
}

const Board = ({player1, player2, onFinishedGame}: Props) => {
  const [board, setBoard] = useState<Board>(emptyBoard)
  const [turn, setTurn] = useState<Turn>(player1)

  const handleClick = (id: SquareId) => () => {
    if (!isGameFinished(board) && !board.find(s => s.id === id)?.status) {
      const newBoard = board.map(square => square.id === id ? {...square, status: turn} : square)
      setBoard(newBoard)
      if (isGameFinished(newBoard)) {
        onFinishedGame(turn)
      } else {
        setTurn(turn === player1 ? player2 : player1)
      }
    }
  }

  return (
    <div className="board">
      {board.map(square => 
        <Square
          key={square.id}
          id={square.id}
          status={square.status} 
          handleClick={handleClick}
          />)}
    </div>
  )
}

export default Board
