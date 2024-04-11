import { useState } from "react"
import Board from "./components/Board"
import { Player } from "./models/Square"

const player1 = 'X'
const player2 = 'O'

const TicTacToe = () => {
  const [winner, setWinner] = useState<Player | null>(null)
  const [actualPlayer, setActualPlaying] = useState<Player>(player1)

  const handleTurnChange = () => setActualPlaying(actualPlayer === player1 ? player2 : player1)
  const handleWinner = () => setWinner(actualPlayer)

  return (<>
    <Board 
      actualPlayer={actualPlayer} 
      onWinner={handleWinner} 
      onTurnChange={handleTurnChange}
    />

    <aside>{
      winner 
        ? `Player ${winner} wins!!` 
        : `Is the turn of player ${actualPlayer}`}
    </aside>
  </>)
}

export default TicTacToe
