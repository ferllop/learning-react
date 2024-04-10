import { Player } from "../TicTacToe"

type Props = {
  status: Square['status']
  id: Square['id']
  handleClick: (id: Square['id']) => () => void
}

const Square = ({status, id, handleClick}: Props) => {
  return <div className="square" onClick={handleClick(id)}><span>{status}</span></div>
}

export default Square
