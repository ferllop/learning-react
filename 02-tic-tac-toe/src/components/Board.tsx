import { Board as BoardType } from "../models/Board"
import { Id as SquareId} from "../models/Square"
import Square from "./Square"

type Props = {
  board: BoardType
  handleSquareClick: (id: SquareId) => () => void
}

const Board = ({handleSquareClick, board}: Props) => {
  return (
    <div className="board">
      {board.map(square => 
        <Square
          key={square.id}
          id={square.id}
          player={square.player} 
          onSquareClick={handleSquareClick}
          />)}
    </div>
  )
}

export default Board
