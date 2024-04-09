import { Player } from "../App"

export type SquareType = {
  status: Player | null,
  id: number
}

type Props = {
  status: SquareType['status']
  id: SquareType['id']
  handleClick: (id: SquareType['id']) => () => void
}

const Square = ({status, id, handleClick}: Props) => {
  return <div className="square" onClick={handleClick(id)}>{status}</div>
}

export default Square
