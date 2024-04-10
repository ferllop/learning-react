import { Id, Player } from "../models/Square"

type Props = {
  id: Id
  player: Player
  onSquareClick: (id: Id) => () => void
}

const Square = ({player, id, onSquareClick}: Props) => {
  return (
    <div className="square" onClick={onSquareClick(id)}>
      {player}
    </div>
  )
}

export default Square
