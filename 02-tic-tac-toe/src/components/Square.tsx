import { SquareId, SquareStatus } from "../models/Square"

type Props = {
  status: SquareStatus
  id: SquareId
  handleClick: (id: SquareId) => () => void
}

const Square = ({status, id, handleClick}: Props) => {
  return (
    <div className="square" onClick={handleClick(id)}>
      <span>{status}</span>
    </div>
  )
}

export default Square
