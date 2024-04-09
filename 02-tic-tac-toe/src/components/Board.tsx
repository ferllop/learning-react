import { useState } from "react"
import Square, { type SquareType } from "./Square"
import { Player } from "../TicTacToe"

type Squares = SquareType[]
const createSquare = (id: number, status: Turn | null): SquareType => ({status, id})
const emptySquares: Squares = (Array(9).fill(null).map((_, index) => createSquare(index, null)))

type Props = {
  player1: Player
  player2: Player
}

type Turn = Props['player1'] | Props['player2']


const Board = ({player1, player2}: Props) => {
  const [squares, setSquares] = useState<Squares>(emptySquares)
  const [turn, setTurn] = useState<Turn>(player1)

  const handleClick = (id: SquareType['id']) => () => {
    setTurn(turn === player1 ? player2 : player1)
    if (!squares[id].status) {
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
