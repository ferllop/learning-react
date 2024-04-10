import { Player } from "../TicTacToe"

export type SquareId = number
export type SquareStatus = Player | null
export type Square = {
  id: number
  status: SquareStatus
}

export const createSquare = (id: number, status: SquareStatus): Square => ({status, id})

type Props = {
  status: Square['status']
  id: Square['id']
  handleClick: (id: Square['id']) => () => void
}

const Square = ({status, id, handleClick}: Props) => {
  return <div className="square" onClick={handleClick(id)}><span>{status}</span></div>
}

export default Square
