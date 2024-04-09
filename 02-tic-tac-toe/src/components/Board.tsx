import { useState } from "react"
import Square, { type SquareType } from "./Square"

export type Player = 'x' | 'o'

type Squares = [
  SquareType, SquareType, SquareType,
  SquareType, SquareType, SquareType,
  SquareType, SquareType, SquareType,
]
const createEmptySquare = (id: number): SquareType => ({status: null, id})
const emptySquares = Array(9).fill(null).map((_, index) => createEmptySquare(index)) as Squares

const Board = () => {
  const [squares] = useState(emptySquares)

  return (
    <div className="board">
      {squares.map(square => <Square key={square.id} id={square.id} status={square.status} />)}
    </div>
  )
}



export default Board
