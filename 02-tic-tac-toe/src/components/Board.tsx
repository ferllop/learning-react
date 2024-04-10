import { useState } from "react"
import { Player, Turn } from "../TicTacToe"
import { type Board, emptyBoard, isGameFinished } from "../models/Board"
import { SquareId } from "../models/Square"
import Square from "./Square"

type Props = {
  player1: Player
  player2: Player
}

const Board = ({player1, player2}: Props) => {
  const [squares, setSquares] = useState<Board>(emptyBoard)
  const [turn, setTurn] = useState<Turn>(player1)

  const handleClick = (id: SquareId) => () => {
    if (!isGameFinished(squares)) {
      if (!squares.find(s => s.id === id)?.status) {
        setSquares(squares.map(square => square.id === id ? {...square, status: turn} : square))
        setTurn(turn === player1 ? player2 : player1)
      }
    }
  }

  return (
    <div className="board">
      {squares.map(square => 
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
