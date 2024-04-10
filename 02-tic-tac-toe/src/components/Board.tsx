import { useState } from "react"
import Square, { SquareId } from "./Square"
import { Player, Turn } from "../TicTacToe"
import { type Board, emptyBoard, isGameFinished } from "./BoardModel"

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
          handleClick={handleClick}
          id={square.id}
          status={square.status} />)}
    </div>
  )
}



export default Board
