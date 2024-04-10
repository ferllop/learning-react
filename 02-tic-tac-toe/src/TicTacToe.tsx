import { useState } from "react"
import Board from "./components/Board"
import { type Board as BoardType, emptyBoard, hasWinner, updateBoard, canPlayInSquare } from "./models/Board"
import { Player, Id as SquareId } from "./models/Square"

const player1 = 'X'
const player2 = 'O'

const TicTacToe = () => {
  const [winner, setWinner] = useState<Player | null>(null)
  const [board, setBoard] = useState<BoardType>(emptyBoard)
  const [actualPlayer, setActualPlaying] = useState<Player>(player1)

  const handleClick = (id: SquareId) => () => {
    if (canPlayInSquare(board, id)) {
      const newBoard = updateBoard(board, id, actualPlayer)
      setBoard(newBoard)
      if (hasWinner(newBoard)) {
        setWinner(actualPlayer)
      } else {
        setActualPlaying(actualPlayer === player1 ? player2 : player1)
      }
    }
  }

  return (
    <>
    <Board board={board} handleSquareClick={handleClick}/>
      {winner && <aside className="winner">Player {winner} wins!!</aside>}
    </>
  )
}

export default TicTacToe
