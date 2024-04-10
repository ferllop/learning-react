import { useState } from "react"
import Square, { SquareId, createSquare } from "./Square"
import { Player, Turn } from "../TicTacToe"

type Board = typeof emptyBoard
const s = (id: SquareId) => createSquare(id, null)
const emptyBoard = [
  s(1), s(2), s(3),
  s(4), s(5), s(6),
  s(7), s(8), s(9),
]

type Props = {
  player1: Player
  player2: Player
}

const Board = ({player1, player2}: Props) => {
  const [squares, setSquares] = useState<Board>(emptyBoard)
  const [turn, setTurn] = useState<Turn>(player1)

  const handleClick = (id: SquareId) => () => {
    setTurn(turn === player1 ? player2 : player1)
    if (!squares[id-1].status) {
      setSquares(squares.map(square => square.id === id ? {...square, status: turn} : square))
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
