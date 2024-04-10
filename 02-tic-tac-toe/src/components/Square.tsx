import { SquareId, SquareStatus } from "../models/Square"

type Props = {
  status: SquareStatus
  id: SquareId
  onSquareClick: (id: SquareId) => () => void
}

const Square = ({status, id, onSquareClick}: Props) => {
  return (
    <div className="square" onClick={onSquareClick(id)}>
      {status}
    </div>
  )
}

export default Square
