import Board from "./components/Board"

export type Player = 'x' | 'o'

const TicTacToe = () => {
  return (
    <>
      <Board player1="X" player2="O"/>
    </>
  )
}



export default TicTacToe
