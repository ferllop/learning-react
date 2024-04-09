import { Player } from "../App"

export type SquareType = {
  status: Player | null,
  id: number
}

type Props = {
  status: SquareType['status']
  id: SquareType['id']
}

const Square = ({status, id}: Props) => {
  return <div className="square" onClick={() => console.log(status, id)}>{status}</div>
}

export default Square
