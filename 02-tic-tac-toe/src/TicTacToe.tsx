import Board from "./components/Board"

export type Player = 'X' | 'O'
export type Turn = Player

const TicTacToe = () => {
  return (
    <>
      <Board player1="X" player2="O"/>
    </>
  )
}



export default TicTacToe
