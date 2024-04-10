import { useState } from "react"
import Board from "./components/Board"

export type Player = 'X' | 'O'
export type Turn = Player

const TicTacToe = () => {
  const [winner, setWinner] = useState<Player | null>(null)
  const handleFinishedGame = (winner: Player) => {
    setWinner(winner)
  }

  return (
    <>
      <Board player1="X" player2="O" onFinishedGame={handleFinishedGame}/>
      {winner && <span className="winner">Player {winner} wins!!</span>}
    </>
  )
}



export default TicTacToe
